import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <button>All Articles</button>{" "}
      </Link>

      <Link to="/topics">
        <button>Topics</button>
      </Link>
    </div>
  );
}
export default Nav;
