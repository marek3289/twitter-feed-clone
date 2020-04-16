import React from 'react';
import Avatar from 'components/atoms/Avatar/Avatar';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
};

export const DefaultAvatar = () => <Avatar />;
export const UserAvatar = () => <Avatar src="https://picsum.photos/100/100" />;
