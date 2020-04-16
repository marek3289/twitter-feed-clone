import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Form from 'components/molecules/Form/Form';
import Textarea from 'components/atoms/Textarea/Textarea';
import { theme } from 'theme/mainTheme';

export const renderWithThemee = (props) => {
  const utils = render(
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>,
  );

  return { ...utils };
};

export const renderForm = (props) => {
  const submit = jest.fn();

  const utils = render(
    <ThemeProvider theme={theme}>
      <Form handleAddTweet={submit} {...props} />
    </ThemeProvider>,
  );

  const form = utils.getByTestId('form');
  return { ...utils, form };
};

export const renderTextarea = (props) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <Textarea placeholder="What's happening?" {...props} />
    </ThemeProvider>,
  );

  const textarea = utils.getByPlaceholderText(/what's happening/i);
  return { ...utils, textarea };
};
