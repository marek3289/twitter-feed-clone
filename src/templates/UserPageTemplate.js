import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/atoms/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const StyledFeedWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.gray200};
  border-right: 1px solid ${({ theme }) => theme.gray200};
  width: 600px;
  min-width: 600px;

  @media (max-width: 700px) {
    max-width: 600px;
    min-width: 0;
    width: 100%;
  }
`;

const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    <StyledFeedWrapper>{children}</StyledFeedWrapper>
    <Sidebar />
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default UserPageTemplate;
