import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import MessageForm from "./components/MessageForm/MessageForm.jsx";
import Header from "./components/Header/Header.jsx";
import "./App.scss";
import { AUTHORS } from "./constants";

const App = () => {
  let [messages, setMessages] = useState([]);

  const addNewMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    if (!messages.length) {
      return;
    }

    const lastMsg = messages[messages.length - 1];
    if (lastMsg.author === AUTHORS.HUMAN) {
      addNewMessage({ author: AUTHORS.BOT, text: "I am Bot" });
    }
  }, [messages]);

  return (
    <div className="app">
      <Grid container spacing={1} wrap="wrap">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item >
          <MessageForm onAddMessage={addNewMessage} />
        </Grid>
        <Grid item xs={7} className="grid_messages">
          <span>Your messages:</span>
          <section className="messages">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`message ${
                  msg.author === AUTHORS.BOT ? "bot_message" : "human_message"
                }`}
              >
                {msg.author}: {msg.text}
              </p>
            ))}
          </section>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
