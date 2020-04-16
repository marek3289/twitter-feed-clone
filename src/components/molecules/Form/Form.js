import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostIcons from 'components/molecules/PostIcons/PostIcons';
import Button from 'components/atoms/Button/Button';
import Textarea from 'components/atoms/Textarea/Textarea';
import { autoExpand } from 'utils';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Form = ({ handleAddTweet, userId }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTweet(value, userId);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    autoExpand(e, value);
  };

  return (
    <StyledForm onSubmit={handleSubmit} data-testid="form">
      <Textarea
        onChange={handleChange}
        value={value}
        placeholder="What's happening?"
      />
      <StyledIconsWrapper>
        <PostIcons isForm />
        <Button disabled={!value} data-testid="form-button">
          Tweet
        </Button>
      </StyledIconsWrapper>
    </StyledForm>
  );
};

Form.propTypes = {
  handleAddTweet: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

Form.defaultProps = {
  userId: null,
};

export default Form;
