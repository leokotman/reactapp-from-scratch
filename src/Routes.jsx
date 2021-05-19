import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Chats from "./components/Chats/Chats.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { AUTHORS } from "./constants";

import "./App.scss";

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
    <BrowserRouter>
      <ul className="menu">
            <Link to="/">
              <li>Profile</li>
            </Link>
            <Link to="/chats">
              <li>
                Chats
              </li>
            </Link>
          </ul>

      <Switch>
          <Route path="/chats">
            <Chats messages={messages} addNewMessage={addNewMessage}/>
          </Route>
          <Route path="/" exact>
            <Profile />
          </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
