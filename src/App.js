import React from "react";
import UserListPage from "./components/UserListPage";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title/>
        <UserListPage/>
      </Wrapper>
    </div>
  );
}

export default App;
