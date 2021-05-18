import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Chats = () => {
  const chats = [
    { id: 1, name: `Chat 1` },
    { id: 2, name: `Chat 2` },
    { id: 3, name: `Chat 3` },
    { id: 4, name: `Chat 4` },
  ];

  return (
    <>
      <Switch>
        <Route path="/:id"></Route>
      </Switch>
      <ul className="chats">
        {chats.map((chat) => {
          <Link to={chat.id}>
            <li>{chat.name}</li>
          </Link>;
        })}
      </ul>
    </>
  );
};

export default Chats;
