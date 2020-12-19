import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title/>
        <Main/>
      </Wrapper>
    </div>
  );
}

export default App;
