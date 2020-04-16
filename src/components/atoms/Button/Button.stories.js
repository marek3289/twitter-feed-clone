import React from 'react';
import Button from 'components/atoms/Button/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/Button',
  component: Button,
};

export const ActiveButton = () => (
  <Button onClick={action('clicked')}>Tweet</Button>
);

export const DisabledButton = () => (
  <Button disabled onClick={action('clicked')}>
    Tweet
  </Button>
);

export const NewTweetButton = () => (
  <Button newTweet onClick={action('clicked')}>
    check new tweets
  </Button>
);
