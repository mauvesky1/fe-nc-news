import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav/Nav-bar";
import Articles from "./components/Articles";
import Topics from "./components/Topic-page";
import SingleArticle from "./components/Article/single-article";
import ErrorPage from "./components/Error-page";

function App() {
  return (
    <div className="App">
      <Header className="App-Header" />
      <Nav className="Nav" />
      <Router>
        <Articles path="/" className="Articles" />
        <Topics path="/topics/:topic" />
        <SingleArticle path="articles/:article_id" />
        <ErrorPage default msg="Page Not Found" status="404" />
      </Router>
    </div>
  );
}

export default App;
