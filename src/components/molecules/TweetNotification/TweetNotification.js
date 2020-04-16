import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const AnimationWrapper = styled.div`
  position: fixed;
  padding: 10px;
  z-index: 100;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  animation: translate 0.6s ease-in;
  cursor: pointer;

  @keyframes translate {
    from {
      opacity: 0;
      transform: translate(-50%, -200px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;

const TweetNotification = ({ action }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    action(false);
  };

  return (
    <AnimationWrapper>
      <Button onClick={handleClick} newTweet>
        check new tweets
      </Button>
    </AnimationWrapper>
  );
};

TweetNotification.propTypes = {
  action: PropTypes.func.isRequired,
};

export default TweetNotification;
