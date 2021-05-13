import React, { useState } from "react";
import { AUTHORS } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const MessageForm = ({ onAddMessage }) => {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage({ author: AUTHORS.HUMAN, text: value });
    setValue("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <form
      onKeyDown={(e) => {
        handleKeyDown(e);
      }}
    >
      <input type="text" value={value} onChange={handleChange} />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </form>
  );
};

export default MessageForm;
