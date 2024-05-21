import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "user", item.recevierId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });
        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);
  console.log(chats);
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
      {chats.map((chat) => {
        <div className="item" key={chat.chatId}>
          <img src="./avatar.png" alt="item" />
          <div className="texts">
            <span>Jonh Doe</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>;
      })}

      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
