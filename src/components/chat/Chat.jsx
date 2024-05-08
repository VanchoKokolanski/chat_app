import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const handleEmoji = (e) => {
    setText((prevState) => prevState + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="user-img" />
          <div className="texts">
            <span>Jonh Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="info" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="message" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur odit omnis ea. Dignissimos repellendus nemo, rem quasi
              esse repellat. Cupiditate adipisci accusamus ea incidunt, maxime
              sequi perspiciatis? Atque, similique.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur odit omnis ea. Dignissimos repellendus nemo, rem quasi
              esse repellat. Cupiditate adipisci accusamus ea incidunt, maxime
              sequi perspiciatis? Atque, similique.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="message" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur odit omnis ea. Dignissimos repellendus nemo, rem quasi
              esse repellat. Cupiditate adipisci accusamus ea incidunt, maxime
              sequi perspiciatis? Atque, similique.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur odit omnis ea. Dignissimos repellendus nemo, rem quasi
              esse repellat. Cupiditate adipisci accusamus ea incidunt, maxime
              sequi perspiciatis? Atque, similique.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="message" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur odit omnis ea. Dignissimos repellendus nemo, rem quasi
              esse repellat. Cupiditate adipisci accusamus ea incidunt, maxime
              sequi perspiciatis? Atque, similique.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://picsum.photos/id/27/200/300" alt="img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur odit omnis ea. Dignissimos repellendus nemo, rem quasi
              esse repellat. Cupiditate adipisci accusamus ea incidunt, maxime
              sequi perspiciatis? Atque, similique.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input
          value={text}
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="emoji"
            onClick={() => setOpen((prevState) => !prevState)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
