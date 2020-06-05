import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";

class Navibar extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        {this.props.app.hasError && (
          <> {this.props.app.errMsg} is not a valid username </>
        )}
        {!this.props.app.toggleLogIn && (
          <div>
            <input
              defaultValue={this.props.app.inputValue}
              onChange={this.props.handleInput}
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
      </Container>
    );
  }
}
export default Navibar;
