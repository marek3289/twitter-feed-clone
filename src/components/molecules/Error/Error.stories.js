import React from 'react';
import Error from 'components/molecules/Error/Error';

export default {
  title: 'molecules/Error',
  component: Error,
};

export const DefaultError = () => <Error />;
export const ErrorWithText = () => <Error content="Loading failed" />;
