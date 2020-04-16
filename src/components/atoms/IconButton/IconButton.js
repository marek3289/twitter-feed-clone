import styled, { css } from 'styled-components';

const IconButton = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.gray200};
  }

  ${({ modal }) =>
    modal &&
    css`
      width: 175px;
      height: 40px;
      border-radius: 0;
      background-position: -17px 50%;
      background-size: 40% 40%;
      font-size: ${({ theme }) => theme.fontSize.m};
    `}
`;

export default IconButton;
