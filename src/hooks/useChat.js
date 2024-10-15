import { useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from '../features/chat/chatSlice';
import { simulateIncomingMessage } from '../features/chat/chatApi';

const useChat = () => {
  const dispatch = useDispatch();

  const sendChatMessage = (message) => {
    dispatch(sendMessage(message));
    simulateIncomingMessage(dispatch, receiveMessage);  // Simulate incoming message after sending
  };

  return {
    sendChatMessage,
  };
};

export default useChat;
