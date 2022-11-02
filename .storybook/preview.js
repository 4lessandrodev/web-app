import React from "react";
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import '../src/styles/style.global.css';
import '../src/styles/stories.global.css';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];