import React from 'react';
import ChatWindow from './components/ChatWindow';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ChatWindow />
      </div>
    </ThemeProvider>
  );
};

export default App;
