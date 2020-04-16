import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'components/molecules/Modal/Modal';
import IconButton from 'components/atoms/IconButton/IconButton';
import trashIcon from 'assets/icons/trash.svg';

const StyledWrapper = styled.div`
  position: relative;
`;

const ButtonModal = ({ icon, action }) => {
  const [visible, setVisibility] = useState(false);

  return (
    <StyledWrapper>
      <IconButton icon={icon} onClick={() => setVisibility(true)} />
      {visible && (
        <>
          <Modal visible={visible} setVisibility={setVisibility}>
            <IconButton modal icon={trashIcon} onClick={action}>
              Delete this tweet
            </IconButton>
          </Modal>
        </>
      )}
    </StyledWrapper>
  );
};

ButtonModal.propTypes = {
  icon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default ButtonModal;
