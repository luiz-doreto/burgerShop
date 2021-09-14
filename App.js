import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Home from '~/pages/Home';
import theme from '~/theme.json';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </GestureHandlerRootView>
);

export default App;
