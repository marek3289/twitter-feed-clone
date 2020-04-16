import { useState, useEffect } from 'react';
import { firestore } from 'fbConfig';

export const useDownloadTweets = (loadNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tweets, setTweets] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError('');

    const subscribe = firestore
      .collection('tweets')
      .orderBy('createdAt', 'desc')
      .limit(15 * loadNumber)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(data);
        setLoadMore(data.length >= loadNumber * 15);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });

    return () => subscribe;
  }, [loadNumber]);

  return { loading, error, tweets, loadMore };
};
