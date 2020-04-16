import React from 'react';
import IconButton from 'components/atoms/IconButton/IconButton';
import arrowIcon from 'assets/icons/arrow-down.svg';
import commentIcon from 'assets/icons/comment.svg';
import retweetIcon from 'assets/icons/retweet.svg';
import heartIcon from 'assets/icons/heart.svg';
import shareIcon from 'assets/icons/share.svg';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/IconButton',
  component: IconButton,
};

export const ArrowIcon = () => (
  <IconButton onClick={action('clicked')} icon={arrowIcon} />
);
export const CommentIcon = () => (
  <IconButton onClick={action('clicked')} icon={commentIcon} />
);
export const RetweetIcon = () => (
  <IconButton onClick={action('clicked')} icon={retweetIcon} />
);
export const HeartIcon = () => (
  <IconButton onClick={action('clicked')} icon={heartIcon} />
);
export const ShareIcon = () => (
  <IconButton onClick={action('clicked')} icon={shareIcon} />
);
