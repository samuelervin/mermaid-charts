import React from "react";
import ReactDOM from "react-dom";
import Mermaid from "./Mermaid";
import arkimr from "./arkimr";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Sam's React Mermaid Charts</h1>
      <Mermaid chart={arkimr} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
