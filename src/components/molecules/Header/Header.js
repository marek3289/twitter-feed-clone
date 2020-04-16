import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import User from 'components/organisms/User/User';
import Modal from 'components/molecules/Modal/Modal';
import Heading from 'components/atoms/Heading/Heading';
import IconButton from 'components/atoms/IconButton/IconButton';
import Avatar from 'components/atoms/Avatar/Avatar';
import signInIcon from 'assets/icons/sign-in.svg';
import { AuthContext } from 'context';

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
  background-color: ${({ theme }) => theme.white};
  z-index: 25;
  cursor: pointer;
`;

const StyledHeading = styled(Heading)`
  width: 92%;
  padding: 12px 0;
`;

const Header = () => {
  const [visible, setVisibility] = useState(false);
  const user = useContext(AuthContext);

  const handleScroll = () => window.scrollTo(0, 0);
  const handleModalOpen = () => setVisibility(true);

  return (
    <>
      <StyledWrapper>
        <StyledHeading onClick={handleScroll}>Home</StyledHeading>
        {user ? (
          <Avatar src={user.avatar} action={handleModalOpen} />
        ) : (
          <IconButton icon={signInIcon} onClick={handleModalOpen} />
        )}
      </StyledWrapper>
      {visible && (
        <Modal auth visible={visible} setVisibility={setVisibility}>
          <User user={user} setVisibility={setVisibility} />
        </Modal>
      )}
    </>
  );
};

export default Header;
