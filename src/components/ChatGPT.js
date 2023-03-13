import { useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';


function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNewUserMessage(newMessage) {
    sendMessage(newMessage);
  }

  async function sendMessage(message) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          temperature: 0.5,
          model: "gpt-3.5-turbo",
          messages: [{"role": "user", "content": message}]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`,
          },
        }
      );
  
      const text = response.data.choices[0].message.content;
      addResponseMessage(text);
    } catch (error) {
      console.error(error);
    }
  }
  
  

  return (
    <Widget
      title="I'm Jarvis Interactive"
      subtitle="AMA!"
      handleNewUserMessage={handleNewUserMessage}
      isOpen={isOpen}
      onClick={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    />
  );
}

export default ChatWidget;