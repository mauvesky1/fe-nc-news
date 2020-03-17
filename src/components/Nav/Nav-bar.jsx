import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";

class Nav extends React.Component {
  state = {
    navToggle: false
  };

  render() {
    console.log(this.state.navToggle);
    return (
      <div>
        <div>
          <Link to="/">
            <button>All Articles</button>{" "}
          </Link>

          <button
            onClick={e => {
              this.setState({ navToggle: !this.state.navToggle });
            }}
          >
            Topics
          </button>
        </div>
        {this.state.navToggle && (
          <div className={styles.topicsMenu}>
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
