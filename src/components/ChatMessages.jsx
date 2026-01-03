import ChatMessage from "./ChatMessage";
import useAutoScroll from '../hooks/useAutoScroll';

// ChatMessages Component
function ChatMessages({chatMessages}){
  
  const chatMessageRef = useAutoScroll([chatMessages]);

    return(
      <div className="chat-message-container"
      ref={chatMessageRef}
      >
        {chatMessages.map((chatMessage)=>{
            return(
                <ChatMessage 
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  time={chatMessage.time}
                  key={chatMessage.id}
                />
              )
        })}
      </div>
    );
}

export default ChatMessages;
