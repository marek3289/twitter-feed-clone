import React from 'react';
import styled from 'styled-components';
import AuthForm from 'components/molecules/AuthForm/AuthForm';

const Background = styled.div`
  position: fixed;
  width: 300px;
  height: 400px;
  top: 50px;
  right: 50%;
  transform: translateX(50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  z-index: 15;
  cursor: default;
`;

export default {
  title: 'molecules/AuthForm',
  component: AuthForm,
  decorators: [(storyFn) => <Background>{storyFn()}</Background>],
};

export const Authentication = () => <AuthForm />;
