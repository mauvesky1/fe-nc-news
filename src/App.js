import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav/Nav-bar";
import Articles from "./components/Articles/Articles";
import Topics from "./components/Topics/Topics";
import SingleArticle from "./components/Single-article/single-article";
import SingleTopic from "./components/Single-topic/SingleTopic";
import ErrorPage from "./components/Error-page";

function App() {
  return (
    <div className="App">
      <Header className="App-Header" />
      <Nav className="Nav" />
      <Router>
        <Articles className="Main" path="/articles" />
        <Topics path="/" />
        <SingleTopic path="topics/:topic" />
        <SingleArticle path="articles/:article_id" />
        <ErrorPage default msg="Page Not Found" status="404" />
      </Router>
    </div>
  );
}

export default App;
