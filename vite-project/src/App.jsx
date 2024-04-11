import { useRef } from "react";

const App = () => {

  let apiData = useRef(null);
  let myPTag = useRef();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products")
    apiData.current = await response.json();
  }

  const showData = () => {
    myPTag.current.innerText = JSON.stringify(apiData.current)
  }

  return (
    <div>
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default App;