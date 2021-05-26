import React from "react";
import { Link } from "react-router-dom";

const ChatList = (props) => {
  console.log(props.chats);
  return (
    <ul>
      {props.chats.map((chat) => (
        <li key={chat.id}>
          <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ChatList;
