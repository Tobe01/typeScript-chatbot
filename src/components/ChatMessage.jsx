import robotProfileImage from '../assets/robot.webp';
import userProfileImage from '../assets/tobe.webp';
import './ChatMessage.css';

// Chat Component
function ChatMessage({message, sender, time }){
  return(
    <div className={ sender === "user" ? "user-container" : "robot-container"}>
      {sender === "robot" && (<img className="chatImage" src={robotProfileImage} />)}
      <div className="messageContainer">
        {message}
        <div className="time">
          {time}
        </div>
      </div>
      {sender === "user" && (<img className="chatImage" src={userProfileImage} />)}
    </div>
  )
};

export default ChatMessage;