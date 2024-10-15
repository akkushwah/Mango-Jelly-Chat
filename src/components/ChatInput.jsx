import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../features/chat/chatSlice';

const ChatInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    dispatch(sendMessage(inputValue));
    setInputValue('');  // Clear the input after sending the message
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Type a message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSendMessage();
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: 2 }}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
