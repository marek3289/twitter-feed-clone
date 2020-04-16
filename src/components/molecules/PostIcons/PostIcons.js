import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton';
import commentIcon from 'assets/icons/comment.svg';
import retweetIcon from 'assets/icons/retweet.svg';
import heartIcon from 'assets/icons/heart.svg';
import shareIcon from 'assets/icons/share.svg';
import smileIcon from 'assets/icons/smile.svg';
import imageIcon from 'assets/icons/image.svg';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: ${({ isForm }) => (isForm ? 'flex-start' : 'space-between')};
  margin: ${({ isForm }) => (isForm ? '0' : '0 50px;')};
  padding: 5px;
`;

const PostIcons = ({ isForm }) => (
  <StyledWrapper isForm={isForm}>
    {isForm ? (
      <>
        <IconButton icon={imageIcon} />
        <IconButton icon={smileIcon} />
      </>
    ) : (
      <>
        <IconButton icon={commentIcon} />
        <IconButton icon={retweetIcon} />
        <IconButton icon={heartIcon} />
        <IconButton icon={shareIcon} />
      </>
    )}
  </StyledWrapper>
);

PostIcons.propTypes = {
  isForm: PropTypes.bool,
};

PostIcons.defaultProps = {
  isForm: false,
};

export default PostIcons;
