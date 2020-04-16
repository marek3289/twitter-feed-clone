import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthForm from 'components/molecules/AuthForm/AuthForm';
import ProfileCard from 'components/molecules/ProfileCard/ProfileCard';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 60vw;
  height: 60vh;

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const User = ({ setVisibility, user }) => {
  return (
    <StyledWrapper>
      {user ? (
        <ProfileCard setVisibility={setVisibility} user={user} />
      ) : (
        <AuthForm setVisibility={setVisibility} />
      )}
    </StyledWrapper>
  );
};

User.propTypes = {
  setVisibility: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
};

User.defaultProps = {
  user: null,
};

export default User;
