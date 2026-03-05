import { useState, useEffect, type CSSProperties } from 'react';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './components/ChatInput.css';
import './components/chatApp.css';
import './index.css';

// Main App Component
function App(){
  // add chatmessage in use state and save usestate in an array variable
  const [ chatMessages, setChatMessage] = useState(JSON.parse(localStorage.getItem('messages') !) || []);
  const [composerHeight, setComposerHeight] = useState(0);

  const appContainerStyle = {
    '--composer-height': `${composerHeight}px`
  } as CSSProperties;

  useEffect(() =>{
    Chatbot.addResponses({
      club: "Chelsea Fc",
      food: "Rice and Chicken",
      price: '$250 USD'
    });

  }, []);


  // save chatmessages in Local storage
  useEffect(() =>{
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  });

  return(
      <div className="appContainer" style={appContainerStyle}>
        {/* <MessagePrompt /> */}
        {/* <h3>Hi, what can I help you with today? Type below to begin.</h3> */}
        <ChatMessages 
          chatMessages={chatMessages}
        />
        <ChatInput 
            chatMessages={chatMessages}
            setChatMessage={setChatMessage}
            onComposerHeightChange={setComposerHeight}
        />
      </div>
    );
}

export default App
