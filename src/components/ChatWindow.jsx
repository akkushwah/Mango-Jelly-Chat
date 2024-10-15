import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import { receiveMessage } from '../features/chat/chatSlice';

const ChatWindow = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  // Simulate receiving a message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(receiveMessage('Hello! Dear How can I help you today?'));
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', my: 2 }}>
        Chat
      </Typography>
      <ChatMessages messages={messages} />
      <ChatInput />
    </Box>
  );
};

export default ChatWindow;
