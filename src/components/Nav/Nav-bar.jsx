import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";

class Nav extends React.Component {
  state = {
    navToggle: false
  };

  render() {
    return (
      <>
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
