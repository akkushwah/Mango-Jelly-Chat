// Mock data for message reception
export const simulateIncomingMessage = (dispatch, receiveMessageAction) => {
    setTimeout(() => {
      dispatch(receiveMessageAction('Hello! how are you .'));
    }, 5000);  
    
    
  };
  