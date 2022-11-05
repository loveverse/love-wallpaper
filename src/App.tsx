import React from "react";
import "./App.less";
import Main from "./views/index";
import ClassDemo from "./views/class";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <ClassDemo></ClassDemo>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
      <Main></Main>
    </div>
  );
}

export default App;
