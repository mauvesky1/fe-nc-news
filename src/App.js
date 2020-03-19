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
import styles from "./App.css";

class App extends React.Component {
  state = {
    username: "",
    inputValue: "jessjelly",
    toggleLogIn: false
  };
  basestate = this.state;
  handleInput = e => {
    const textInput = e.target.value;

    this.setState({ inputValue: textInput });
  };
  handleClick = e => {
    this.setState(currentState => {
      // error handling so people only sign in as jess etc.
      if (this.state.toggleLogIn === true) {
        return this.basestate;
      } else {
        return {
          username: currentState.inputValue,
          toggleLogIn: !currentState.toggleLogIn
        };
      }
    });
  };
  render() {
    return (
      <div>
        <Header />

        <Nav app={this.state} handleClick={this.handleClick} />
        <Router>
          <Articles path="/articles" />
          <Topics path="/" />
          <SingleTopic path="topics/:topic" />
          <SingleArticle
            username={this.state.username}
            path="articles/:article_id"
          />
          {/* // path=articles/new */}
          <ErrorPage default msg="Page Not Found" status="404" />
        </Router>
      </div>
    );
  }
}

export default App;
