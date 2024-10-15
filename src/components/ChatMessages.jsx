import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatMessages = ({ messages }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        padding: 2,
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
      }}
    >
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 1,
            textAlign: message.user === 'User1' ? 'right' : 'left',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {message.user}
          </Typography>
          <Typography variant="body2">{message.text}</Typography>
          <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
            {message.timestamp}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChatMessages;
