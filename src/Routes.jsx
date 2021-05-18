import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import MessageForm from "./components/MessageForm/MessageForm.jsx";
import Chats from "./components/Chats/Chats.jsx";
import Profile from "./components/Profile/Profile.jsx";

import "./App.scss";
import { AUTHORS } from "./constants";

const Routes = () => {
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
      <Switch>
        <Route path="/chats">
          <Chats />
        </Route>
        <Route path="/" exact>
          <Profile />
        </Route>
      </Switch>

      <Grid container spacing={1} wrap="wrap">
        <Grid item xs={12}>
          <h1>React messenger</h1>
          <ul className="menu">
            <Link to="/">
              <li>Profile</li>
            </Link>
            <Link to="/chats">
              <li>
                Chats
                <Chats />
              </li>
            </Link>
          </ul>
        </Grid>
        <Grid item>
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
export default Routes;
