import React, { useState } from "react";
import MessageForm from "./components/MessageForm/MessageForm.jsx";
import s from "./App.module.scss";

const App = () => {
  let [messages, setMessages] = useState([]);

  const addNewMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className={s.app}>
      <h1>Hello, React!</h1>
      <button onClick={addNewMessage}>Add message</button>
      <span>Your messages:</span>
      {messages.map((msg, index) => (
        <p key={index}> {msg} </p>
      ))}
      <MessageForm onAddMessage={addNewMessage} />
    </div>
  );
};
export default App;
