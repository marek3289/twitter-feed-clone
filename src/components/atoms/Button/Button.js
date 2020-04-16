import styled, { css } from 'styled-components';
import arrowIcon from 'assets/icons/arrow-up.svg';

const Button = styled.button`
  width: 70px;
  height: 35px;
  background-color: ${({ theme }) => theme.blue};
  color: white;
  border: none;
  border-radius: 25px;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  flex-shrink: 0;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  ${({ newTweet }) =>
    newTweet &&
    css`
      width: 160px;
      min-height: 25px;
      height: auto;
      padding: 5px 13px 5px 28px;
      background-image: url(${arrowIcon});
      background-repeat: no-repeat;
      background-size: 12px;
      background-position: 8px center;
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export default Button;
