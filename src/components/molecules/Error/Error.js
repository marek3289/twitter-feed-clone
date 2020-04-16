import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 200px;
`;

const Error = ({ content }) => (
  <StyledWrapper>
    <Heading>{content}</Heading>
  </StyledWrapper>
);

Error.propTypes = {
  content: PropTypes.string,
};

Error.defaultProps = {
  content: 'Something went wrong...',
};

export default Error;
