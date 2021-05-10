import React, { useState } from "react";
import { AUTHORS } from "../../constants";

const MessageForm = ({ onAddMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage({ author: AUTHORS.HUMAN, text: value });
    setValue("");
  };
  const handleKeyDown = (e, cb) => {
    if (e.key === "Enter") {
      e.preventDefault();
      cb();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={(e) => {
        handleKeyDown(e, handleSubmit);
      }}
    >
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit" value="Send message" />
    </form>
  );
};

export default MessageForm;
