import React from 'react';
import PostIcons from 'components/molecules/PostIcons/PostIcons';

export default {
  title: 'molecules/PostIcons',
  component: PostIcons,
};

export const IconButtons = () => <PostIcons />;
export const FormButtons = () => <PostIcons isForm />;
