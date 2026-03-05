import robotProfileImage from "../assets/chatbot.webp";
import userProfileImage from "../assets/tobe.webp";
import "./ChatMessage.css";
import '../mediaqueries/chatapp.css';

// Chat Component
function ChatMessage({ message, sender, time }) {
  return (
      <div className={sender === "user" ? "user-container" : "robot-container"}>
        {sender === "robot" && (
          <img
            className="chatImage"
            src={robotProfileImage}
            alt="Chatbot Profile"
          />
        )}
        <div className="messageContainer">
          {message}
          <div className="time">{time}</div>
        </div>
        {sender === "user" && (
          <img
            className="chatImage"
            src={userProfileImage}
            alt="User Profile"
          />
        )}
      </div>
  );
}

export default ChatMessage;
