import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 10;
  cursor: default;
`;

const ModalWrapper = styled.div`
  position: absolute;
  background-color: white;
  top: 0;
  right: 0;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  z-index: 15;
  cursor: default;

  ${({ center }) =>
    center &&
    css`
      position: fixed;
      top: 50px;
      right: 50%;
      transform: translateX(50%);
    `}
`;

const Modal = ({ children, visible, setVisibility, auth }) => (
  <>
    {visible && (
      <>
        <StyledOverlay onClick={() => setVisibility(false)} />
        <ModalWrapper center={auth}>{children}</ModalWrapper>
      </>
    )}
  </>
);

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  visible: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

Modal.defaultProps = {
  auth: false,
};

export default Modal;
