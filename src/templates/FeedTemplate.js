import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import PostForm from 'components/organisms/PostForm/PostForm';
import Header from 'components/molecules/Header/Header';

const FeedTemplate = ({ children }) => (
  <UserPageTemplate>
    <Header />
    <PostForm />
    {children}
  </UserPageTemplate>
);

FeedTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default FeedTemplate;
