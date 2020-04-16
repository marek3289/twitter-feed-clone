import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonModal from 'components/molecules/ButtonModal/ButtonModal';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Avatar from 'components/atoms/Avatar/Avatar';
import arrowIcon from 'assets/icons/arrow-down.svg';

const PostWrapper = styled.div`
  padding: 10px 15px 10px 60px;
  position: relative;
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 1;
`;

const StyledUserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 0;

  & > p:not(:first-child) {
    margin: 0 5px;
    position: relative;
  }

  & > p:nth-child(2) {
    flex: 1;
  }

  & > p:last-child::before {
    content: '•';
    position: absolute;
    top: 1px;
    left: -7.5px;
    background-color: ${({ theme }) => theme.gray300};
    width: 0;
    height: 0;
  }
`;

const PostBody = ({
  handleDelete,
  content,
  author,
  email,
  avatar,
  createdAt,
}) => (
  <PostWrapper>
    <Avatar absolute src={avatar} />
    <StyledWrapper>
      <StyledHeader>
        <StyledUserInfo>
          <Paragraph shrink bold>
            {author}
          </Paragraph>
          <Paragraph shrink light>
            {email}
          </Paragraph>
          <Paragraph light>{createdAt}</Paragraph>
        </StyledUserInfo>
        <ButtonModal action={handleDelete} icon={arrowIcon} />
      </StyledHeader>
      <Paragraph textwrap>{content}</Paragraph>
    </StyledWrapper>
  </PostWrapper>
);

PostBody.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
};

PostBody.defaultProps = {
  author: 'Anonymous',
  avatar: undefined,
  email: null,
};

export default PostBody;
