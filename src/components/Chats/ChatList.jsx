import React from "react";
import { Link } from "react-router-dom";

const ChatList = (props) => {
  console.log(props.chats);
  return (
    <ul>
      {props.chats.map((chat) => (
        <li key={chat.id}>{chat.name}</li>
      ))}
    </ul>
  );
};

export default ChatList;
