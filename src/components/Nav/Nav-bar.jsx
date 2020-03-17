import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";

class Nav extends React.Component {
  state = {
    navToggle: false
  };

  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <button>All Articles</button>{" "}
          </Link>

          <button
            onClick={e => {
              this.setState(currentState => {
                return { navToggle: !currentState.navToggle };
              });
            }}
          >
            Topics
          </button>
        </div>
        {this.state.navToggle && (
          <div>
            <Link to="/topics/coding">
              <button className="topicsMenu">Coding</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default Nav;
