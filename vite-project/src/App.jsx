import { useState } from "react";

const App = () => {

  const [myObj, setMyObj] = useState({
    key1: "Truong 1",
    key2: "Truong 2",
    key3: "Truong 3",
  })

  const change = () => {
    setMyObj(
      prevObj =>({
        ...prevObj, 
        key1: "Hi how are you?",
        key2: "what is your name"
      })
    )
  }

  return (
    <div>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;