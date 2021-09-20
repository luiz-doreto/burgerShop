import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';

import Home from '~/pages/Home';
import theme from '~/theme.json';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Host>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Host>
  </GestureHandlerRootView>
);

export default App;
