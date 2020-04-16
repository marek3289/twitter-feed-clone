import React, { useContext } from 'react';
import styled from 'styled-components';
import Form from 'components/molecules/Form/Form';
import Avatar from 'components/atoms/Avatar/Avatar';
import { AuthContext } from 'context';
import { firestore } from 'fbConfig';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 75px;
  height: auto;
  border-bottom: 10px solid ${({ theme }) => theme.gray200};
  background-color: ${({ theme }) => theme.white};
  transition: background-color 0.25s ease-in-out;
  padding: 8px 15px 0 60px;
  position: relative;
`;

const PostForm = () => {
  const user = useContext(AuthContext);

  const handleAddTweet = (content, userId) => {
    firestore.collection('tweets').add({
      createdAt: new Date(),
      content,
      userId,
    });
  };

  return (
    <StyledWrapper>
      <Avatar absolute isForm src={user ? user.avatar : undefined} />
      <Form userId={user ? user.userId : ''} handleAddTweet={handleAddTweet} />
    </StyledWrapper>
  );
};

export default PostForm;
