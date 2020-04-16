import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { auth, firestore } from 'fbConfig';

const headingText = {
  signIn: 'Sign in to Twitter!',
  signUp: 'Create new account!',
};

const buttonText = {
  signIn: 'Sign In',
  signUp: 'Sign Up',
};

const changeTypeText = {
  signIn: "Don't have an account? Sign Up!",
  signUp: 'Already have an account? Sign In!',
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 300px;
  width: 100%;
  height: 60vh;

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const StyledParagraph = styled(Paragraph)`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ErrorMessage = styled(Paragraph)`
  text-align: center;
  color: red;
`;

const AuthForm = ({ setVisibility }) => {
  const [authType, setAuthType] = useState('signIn');
  const [error, setError] = useState();

  const handleAuthType = () => {
    const authTypes = ['signUp', 'signIn'];
    setAuthType(...authTypes.filter((type) => type !== authType));
  };

  const [inputsContent, setInputsContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '',
      email: '',
      password: '',
    },
  );

  const { username, email, password } = inputsContent;

  const handleChange = (e) => {
    if (error) setError(null);
    setInputsContent({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();

    if (type === 'signIn') {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setVisibility(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    } else if (type === 'signUp') {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          return firestore.collection('users').doc(res.user.uid).set({
            username,
            email,
          });
        })
        .then(() => {
          setVisibility(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <StyledWrapper>
      <Heading>{headingText[authType]}</Heading>
      <StyledForm onSubmit={(e) => handleSubmit(e, authType)}>
        {authType === 'signUp' && (
          <Input
            name="username"
            label="Username"
            value={username}
            handleChange={handleChange}
          />
        )}
        <Input
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
        />
        <Input
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
        />
        <Button>{buttonText[authType]}</Button>
      </StyledForm>
      {error && <ErrorMessage textwrap>{error}</ErrorMessage>}
      <StyledParagraph onClick={handleAuthType}>
        {changeTypeText[authType]}
      </StyledParagraph>
    </StyledWrapper>
  );
};

AuthForm.propTypes = {
  setVisibility: PropTypes.func.isRequired,
};

export default AuthForm;
