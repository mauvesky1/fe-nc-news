import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Navibar from "./components/Nav/Nav-bar";
import Articles from "./components/Articles/Articles";
import Topics from "./components/Topics/Topics";
import SingleArticle from "./components/Single-article/single-article";
import SingleTopic from "./components/Single-topic/SingleTopic";
import ErrorPage from "./components/Error-page";
import styles from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as api from "./api";

class App extends React.Component {
  state = {
    username: "",
    inputValue: "jessjelly",
    toggleLogIn: false,
    isLoading: false,
    hasError: false,
    errorMsg: "",
  };
  basestate = this.state;

  handleInput = (e) => {
    console.log("hdsdfjdsfljsdlfjfd");
    const textInput = e.target.value;

    this.setState({ inputValue: textInput });
  };
  handleClick = (e) => {
    if (this.state.toggleLogIn === true) {
      return this.setState(this.basestate);
    } else {
      this.setState({ isLoading: true });
      api
        .checkUser(this.state.inputValue)
        .then((res) => {
          this.setState((currentState) => {
            return {
              username: currentState.inputValue,
              toggleLogIn: !currentState.toggleLogIn,
              isLoading: false,
              hasError: false,
            };
          });
        })
        .catch((err) => {
          this.setState((currentState) => {
            return { hasError: true, errMsg: currentState.inputValue };
          });
        });
    }
  };
  render() {
    return (
      <div>
        <Header />

        <Navibar
          app={this.state}
          handleClick={this.handleClick}
          handleInput={this.handleInput}
        />
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
