import React, {useState} from "react";

const App = () => {
    let [messages, setValue] = useState([]);
  
    const addNewMessage = () => {
      let newMessage = "new message";
      setValue((messages += newMessage));
    };
  
    return (
      <div>
        <h1>Hello, React!</h1>
        <button onClick={addNewMessage}>Add message</button>
        <span>Your messages:</span>
        <p> {messages} </p>
      </div>
    );
};
export default App;