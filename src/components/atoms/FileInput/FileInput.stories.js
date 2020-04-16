import React from 'react';
import styled from 'styled-components';
import FileInput from 'components/atoms/FileInput/FileInput';

const Background = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.gray200};
  border-radius: 50px;
  position: relative;
`;

export default {
  title: 'atoms/FileInput',
  component: FileInput,
  decorators: [(storyFn) => <Background>{storyFn()}</Background>],
};

export const Input = () => <FileInput />;
