import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import UserIcon from 'assets/icons/user.svg';

const StyledAvatar = styled.img`
  width: ${({ big }) => (big ? '100px' : '35px')};
  height: ${({ big }) => (big ? '100px' : '35px')};
  background-color: ${({ theme }) => theme.gray200};
  padding: ${({ src }) => (src === UserIcon ? '5px' : '0')};
  border-radius: 50px;
  flex-shrink: 0;

  ${({ absolute }) =>
    absolute &&
    css`
      width: 42px;
      height: 42px;
      position: absolute;
      top: ${({ isForm }) => (isForm ? '8px' : '16px')};
      left: 10px;
    `}
`;

const Avatar = ({ src, alt, isForm, absolute, action, big }) => (
  <StyledAvatar
    onClick={action}
    absolute={absolute}
    src={src}
    alt={alt}
    big={big}
    isForm={isForm}
  />
);

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  isForm: PropTypes.bool,
  absolute: PropTypes.bool,
  action: PropTypes.func,
  big: PropTypes.bool,
};

Avatar.defaultProps = {
  src: UserIcon,
  alt: 'avatar',
  isForm: false,
  absolute: false,
  action: null,
  big: false,
};

export default Avatar;
