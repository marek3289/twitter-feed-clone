import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FileInput from 'components/atoms/FileInput/FileInput';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Avatar from 'components/atoms/Avatar/Avatar';
import { firestore, auth, storage } from 'fbConfig';

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  width: 100%;
  height: 100%;
`;

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 10px;
  }
`;

const StyledAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: yellow;
  border-radius: 50px;
`;

const ProfileCard = ({ setVisibility, user: { username, avatar, userId } }) => {
  const handleSignOut = () => {
    auth.signOut();
    setVisibility(false);
  };

  const handleUpdate = (img) => {
    firestore
      .collection('users')
      .doc(userId)
      .update({
        avatar: img,
      })
      .then(() => {
        window.location.reload();
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const newAvatar = storage.ref().child(`avatars/${file.name}`);
    newAvatar.put(file).then((snapshot) => {
      if (snapshot.metadata.contentType === 'image/jpeg') {
        storage
          .ref()
          .child(snapshot.metadata.fullPath)
          .getDownloadURL()
          .then((img) => {
            handleUpdate(img);
          });
      }
    });
  };

  return (
    <StyledCardWrapper>
      <StyledUser>
        <StyledAvatarWrapper>
          <Avatar big src={avatar} />
          <FileInput action={handleFileChange} />
        </StyledAvatarWrapper>
        <Heading>{username}</Heading>
      </StyledUser>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </StyledCardWrapper>
  );
};

ProfileCard.propTypes = {
  setVisibility: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
