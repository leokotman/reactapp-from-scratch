import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = ({str}) => {
  let [value, setValue] = useState(10);

  const addPlusToString = () => {
    return `${str}+${value}`;
  };
  const addOneToValue = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <h1>Hello, React! {addPlusToString()}</h1>
      <button onClick={addOneToValue}>Update</button>
    </div>
  );
};
ReactDOM.render(<App str="mystring" />, document.getElementById("app"));
