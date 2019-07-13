import React from "react";
import "./App.css";
import Main from "./Main";
import Jambotron from "./Jambotron";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Jambotron />
      <Main />
    </div>
  );
}

export default App;
