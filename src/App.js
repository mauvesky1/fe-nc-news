import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav/Nav-bar";
import Articles from "./components/Articles";
import Topics from "./components/Topic-page";
import SingleArticle from "./components/single-article";

function App() {
  return (
    <div className="App">
      <Header className="App-Header" />
      <Nav className="Nav" />
      <Router>
        <Articles path="/" className="Articles" />
        <Topics path="/topics/:topic" />
        <SingleArticle path="articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
