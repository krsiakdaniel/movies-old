import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@chakra-ui/core';

import App from './App';

const ThemedApp = () => {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  );
};

ReactDOM.render(<ThemedApp />, document.getElementById('root'));

serviceWorker.unregister();
