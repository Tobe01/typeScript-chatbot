import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './components/ChatInput.css';
import './App.css';
import './index.css';


// Main App Component
function App(){
  // add chatmessage in use state and save usestate in an array variable
  const [ chatMessages, setChatMessage] = useState(JSON.parse(localStorage.getItem('messages')) || []);

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
      <div className="appContainer">
      {/* <MessagePrompt /> */}
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
          chatMessages={chatMessages}
          setChatMessage={setChatMessage}
      />
      </div>
    );
}

export default App
