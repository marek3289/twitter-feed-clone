import styled from 'styled-components';

const Textarea = styled.textarea`
  border: none;
  outline: none;
  min-height: 30px;
  height: auto;
  margin: 10px 0 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  width: 100%;
  resize: none;
  overflow: hidden;

  &:focus {
    opacity: 0.7;
  }
`;

export default Textarea;
