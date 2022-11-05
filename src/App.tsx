import React from "react";
import "./App.less";
import Main from "./views/index";


function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
      <Main></Main>
    </div>
  );
}

export default App;
