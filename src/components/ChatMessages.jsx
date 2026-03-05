import ChatMessage from "./ChatMessage";
import useAutoScroll from "../hooks/useAutoScroll";
import '../mediaqueries/chatapp.css';

// ChatMessages Component
function ChatMessages({ chatMessages }) {
  const chatMessageRef = useAutoScroll([chatMessages]);
  const isEmptyChat = chatMessages.length === 0;

  return (
    <section
      className={`chat-message-container ${isEmptyChat ? "chat-message-container--empty" : ""}`}
      ref={chatMessageRef}
      role="log"
      aria-live="polite"
      aria-relevant="additions text"
      aria-label="Chat messages"
    >
      {isEmptyChat ? (
        <div className="empty-chat-state" role="status" aria-atomic="true">
          <p className="empty-chat-state__title">Type a message to begin.</p>
          <p className="empty-chat-state__hint">Press Enter to send.</p>
        </div>
      ) : (
        <div className="chat-message-list">
          {chatMessages.map((chatMessage) => {
            return (
              <ChatMessage
                message={chatMessage.message}
                sender={chatMessage.sender}
                time={chatMessage.time}
                key={chatMessage.id}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default ChatMessages;
