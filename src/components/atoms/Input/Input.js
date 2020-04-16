import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 80%;
  margin: 7px;
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ theme }) => theme.gray200};
  padding: 5px 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.gray200};
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: black;

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.blue};
  }

  &:focus + label {
    color: ${({ theme }) => theme.blue};
  }
`;

const Input = ({ name, label, value, handleChange }) => (
  <StyledWrapper>
    <StyledInput
      required
      id={name}
      type={name}
      name={name}
      value={value}
      onChange={handleChange}
    />
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
  </StyledWrapper>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
