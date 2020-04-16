import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.blue};
  right: 5px;
  bottom: 5px;
  z-index: 10;
  border-radius: 50px;
  cursor: pointer;

  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 2px;
    background-color: white;
    top: 11px;
    left: 6px;
  }

  ::before {
    transform: rotate(90deg);
  }
`;

const StyledInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const FileInput = ({ action }) => (
  <>
    <StyledLabel htmlFor="file" />
    <StyledInput onChange={action} id="file" type="file" name="file" />
  </>
);

FileInput.propTypes = {
  action: PropTypes.func.isRequired,
};

export default FileInput;
