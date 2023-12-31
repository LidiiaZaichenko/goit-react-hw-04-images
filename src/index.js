import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyle';

const theme = {
  color: {
    blue: 'blue',
    red: 'red',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme }>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
