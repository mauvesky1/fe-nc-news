import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Articles path="/" />
        </Router>
      </header>
    </div>
  );
}

export default App;
