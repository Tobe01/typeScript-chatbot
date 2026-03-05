import { useState, useEffect, useRef } from 'react'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'
import spinner from '../assets/loading-spinner.gif';
import '../mediaqueries/chatapp.css';

// Input Component
function ChatInput({ chatMessages, setChatMessage, onComposerHeightChange }){

  const [ inputText, setInputText ] = useState('');
  const composerRef = useRef(null);

  useEffect(() => {
    const composerElement = composerRef.current;
    if (!composerElement || !onComposerHeightChange) {
      return;
    }

    const reportComposerHeight = () => {
      onComposerHeightChange(composerElement.offsetHeight);
    };

    reportComposerHeight();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', reportComposerHeight);
      return () => {
        window.removeEventListener('resize', reportComposerHeight);
      };
    }

    const resizeObserver = new ResizeObserver(reportComposerHeight);
    resizeObserver.observe(composerElement);
    window.addEventListener('resize', reportComposerHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', reportComposerHeight);
    };
  }, [onComposerHeightChange]);

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

  return(
    <>
      <div className="input-container" ref={composerRef} role="group" aria-label="Message composer">
        <input placeholder="message Chatbot"
          className="inputField"  
          type="text"
          aria-label="Message input"
        
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
    </>
  )
}

export default ChatInput;
