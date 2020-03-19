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
      // error handling to stop people logging in as Jess etc.
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
      <div className="App">
        <Header className="App-Header" />
        {!this.state.toggleLogIn ? (
          <div>
            <input
              value={this.state.inputValue}
              onChange={this.handleInput}
            ></input>{" "}
            <button onClick={this.handleClick}>Log in</button>
          </div>
        ) : (
          <div>
            <h3>Logged in as {this.state.username}</h3>
            <button onClick={this.handleClick}>Log out</button>
          </div>
        )}

        <Nav className="Nav" />
        <Router>
          <Articles className="Main" path="/articles" />
          <Topics path="/" />
          <SingleTopic path="topics/:topic" />
          <SingleArticle
            username={this.state.username}
            path="articles/:article_id"
          />
          <ErrorPage default msg="Page Not Found" status="404" />
        </Router>
      </div>
    );
  }
}

export default App;
