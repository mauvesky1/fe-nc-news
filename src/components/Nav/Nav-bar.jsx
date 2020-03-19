import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";

class Nav extends React.Component {
  render() {
    // needs changing from class
    return (
      <>
        {!this.props.app.toggleLogIn && (
          <div>
            <input
              value={this.props.app.inputValue}
              onChange={this.props.app.handleInput}
            ></input>{" "}
            <button onClick={this.props.handleClick}>Log in</button>
          </div>
        )}{" "}
        {this.props.app.toggleLogIn && (
          <div>
            <h3>Logged in as {this.props.app.username}</h3>
            <button onClick={this.props.handleClick}>Log out</button>
          </div>
        )}
        <div>
          <Link to="/articles">
            <button>All Articles</button>{" "}
          </Link>

          <Link to="/">
            <button>Topics</button>{" "}
          </Link>
          <Link to="/articles/new">
            <button>Post an article </button>{" "}
          </Link>
        </div>
      </>
    );
  }
}
export default Nav;
