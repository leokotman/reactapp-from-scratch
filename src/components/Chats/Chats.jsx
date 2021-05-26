import React from "react";
import Grid from "@material-ui/core/Grid";

import { AUTHORS } from "../../constants";
import MessageForm from "../MessageForm/MessageForm.jsx";
import ChatList from "./ChatList.jsx";

const Chats = (props) => {
  const chats = [
    { id: 1, name: `Chat 1` },
    { id: 2, name: `Chat 2` },
    { id: 3, name: `Chat 3` },
    { id: 4, name: `Chat 4` },
  ];

  return (
    <Grid container spacing={1} wrap="wrap">
      <Grid item xs={3}>
        chatlist
        <ChatList chats={chats} />
      </Grid>
      <Grid item xs={7} className="grid_messages">
        <span>Your messages:</span>
        <section className="messages">
          {props.messages.map((msg, index) => (
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
      <Grid item>
        <MessageForm onAddMessage={props.addNewMessage} />
      </Grid>
    </Grid>
  );
};

export default Chats;
