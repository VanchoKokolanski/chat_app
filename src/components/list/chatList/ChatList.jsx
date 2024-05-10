import { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
      <div className="searchClass">
        <div className="searchBar">
          <img src="/search.png" alt="search" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="plus"
          className="add"
          onClick={() => setAddMode((prevState) => !prevState)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="item" />
        <div className="texts">
          <span>Jonh Doe</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="item" />
        <div className="texts">
          <span>Jonh Doe</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="item" />
        <div className="texts">
          <span>Jonh Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
