import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme, bold }) => (bold ? theme.bold : theme.regular)};
  color: ${({ theme, light }) => (light ? theme.gray300 : 'black')};
  white-space: ${({ textwrap }) => (textwrap ? 'wrap' : 'nowrap')};

  ${({ shrink }) =>
    shrink &&
    css`
      min-width: 0;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
`;

export default Paragraph;
