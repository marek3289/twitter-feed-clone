import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from 'context';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { auth, firestore } from 'fbConfig';

const MainTemplate = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) =>
      user ? setUserId(user.uid) : setCurrentUser(null),
    );
  }, []);

  useEffect(() => {
    if (userId) {
      firestore
        .collection('users')
        .doc(userId)
        .get()
        .then((user) => {
          const data = user.data();
          setCurrentUser({ ...data, userId });
        });
    }
  }, [userId]);

  return (
    <AuthContext.Provider value={currentUser}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthContext.Provider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
