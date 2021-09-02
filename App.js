import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Home from '~/pages/Home';
import theme from '~/theme.json';

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
