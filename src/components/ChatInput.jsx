import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'
import spinner from '../assets/loading-spinner.gif';

// Input Component
function ChatInput({ chatMessages, setChatMessage}){

  const [ inputText, setInputText ] = useState('');

  function fetchMessage(event){
    setInputText(event.target.value);
  }

  const time = dayjs().valueOf();

  const timeLaps = dayjs(time).format('h:mma')

  // fetch chatmessage using the spread operator (...) 
  async function sendMessage(){
    const newMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        time: timeLaps,
        id: crypto.randomUUID()
      }
    ]
  
    setChatMessage(newMessage)
    setInputText('');
    setChatMessage([
      ...newMessage,
      {
        message: <img src={spinner} width="30" />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    const response = await Chatbot.getResponseAsync(inputText);
      setChatMessage([
        ...newMessage,
        {
          message: response,
          sender: 'robot',
          time: timeLaps,
          id: crypto.randomUUID()
        }
      ])

  };

  // Clear messages
   function clearMessage(){
     setChatMessage([]);
   };



  // function to check for the "Enter" key
  function enterKey(event){
    setInputText(event.target.key);

    { event.key === "Enter" ? sendMessage() : '' }
    { event.key === "Escape" ?  setInputText('') : ''}
  }

  const [ content, setContent ] = useState('Move textbox to bottom');


  // function to flip the text content below the input field onclick
  function updateContent(){
    setContent ( content === "Move textbox to bottom" ? "Move textbox to top" : "Move textbox to bottom" );
  }

  return(
    <>
      <div className="input-container">
        <input placeholder="Send a message to Chatbot" size="30"
          className="inputField"  
        
          onChange={fetchMessage}
          value={inputText}
          onKeyDown={enterKey}
        />
        <button
          className="sendButton"

          onClick={sendMessage}
        >Send</button>
        <button className="clearButton"
          onClick={clearMessage}
        >Clear</button>
      </div>
      <div className="moveText">
        <p
          onClick={updateContent}
        >{content}</p>
      </div>
    </>
  )
}

export default ChatInput;