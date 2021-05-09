import React, { useState } from "react";

const MessageForm = ({ onAddMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage(value);
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
      <input type="submit" />
    </form>
  );
};

export default MessageForm;
