import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostBody from 'components/molecules/PostBody/PostBody';
import PostIcons from 'components/molecules/PostIcons/PostIcons';
import Loader from 'components/atoms/Loader/Loader';
import moment from 'moment';
import { firestore } from 'fbConfig';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 110px;
  height: auto;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
  background-color: ${({ theme }) => theme.white};
  transition: background-color 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.gray100};
  }
`;

const Post = ({ id, content, createdAt, userId }) => {
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = () => {
    firestore.collection('tweets').doc(id).delete();
  };

  useEffect(() => {
    if (userId) {
      firestore
        .collection('users')
        .doc(userId)
        .get()
        .then((user) => {
          const data = user.data();
          setAuthor(data);
          return setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [userId]);

  return (
    <StyledWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PostBody
            handleDelete={handleDelete}
            content={content}
            author={author.username}
            email={author.email}
            avatar={author.avatar}
            createdAt={moment(createdAt.toDate()).fromNow()}
          />
          <PostIcons />
        </>
      )}
    </StyledWrapper>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.objectOf(PropTypes.number).isRequired,
  userId: PropTypes.string,
};

Post.defaultProps = {
  userId: null,
};

export default Post;
