import React, { useState, useEffect } from 'react';
import FeedTemplate from 'templates/FeedTemplate';
import Post from 'components/organisms/Post/Post';
import TweetNotification from 'components/molecules/TweetNotification/TweetNotification';
import Error from 'components/molecules/Error/Error';
import Loader from 'components/atoms/Loader/Loader';
import { useDownloadTweets } from 'hooks/useDownloadTweets';
import { useOnSnapshot } from 'hooks/useOnSnapshot';
import { useObserver } from 'hooks/useObserver';
import 'intersection-observer';

const Feed = () => {
  const [tweetsList, setTweetsList] = useState([]);
  const [loadNumber, setLoadNumber] = useState(1);
  const [notification, setNotification] = useState(false);

  const { loading, error, tweets, loadMore } = useDownloadTweets(loadNumber);
  const { lastElement } = useObserver(loading, loadMore, setLoadNumber);
  const { newUpdate } = useOnSnapshot();

  const newTweetNotification = (currentViewHeight) => {
    if (currentViewHeight >= 200) setNotification(true);
  };

  useEffect(() => {
    newUpdate.map(({ actionType }) => {
      if (actionType && actionType === 'removed') {
        return setTweetsList((prevState) => [
          ...prevState.filter((tweet) => newUpdate[0].id !== tweet.id),
        ]);
      }

      newTweetNotification(window.scrollY);
      return setTweetsList((prevState) => {
        if (prevState.every((state) => !state.id.includes(newUpdate[0].id))) {
          return [...newUpdate, ...prevState];
        }

        return [];
      });
    });
  }, [newUpdate]);

  useEffect(() => {
    setTweetsList(tweets);
  }, [tweets]);

  return (
    <FeedTemplate>
      {tweetsList.map((tweet, i) => {
        if (tweetsList.length === i + 1) {
          return (
            <div ref={lastElement} key={tweet.id}>
              <Post
                id={tweet.id}
                content={tweet.content}
                createdAt={tweet.createdAt}
                userId={tweet.userId}
              />
            </div>
          );
        }

        return (
          <Post
            key={tweet.id}
            id={tweet.id}
            content={tweet.content}
            createdAt={tweet.createdAt}
            userId={tweet.userId}
          />
        );
      })}
      {notification && (
        <TweetNotification isActive={notification} action={setNotification} />
      )}
      {loading && <Loader />}
      {error && <Error content={error} />}
      {!loading && !loadMore && (
        <Error content="Sorry, there are no more tweets :(" />
      )}
    </FeedTemplate>
  );
};

export default Feed;
