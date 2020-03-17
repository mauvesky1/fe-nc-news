import React from "react";
import { Link } from "@reach/router";
import styles from "./Articles-Cards.module.css";

function ArticlesCards(props) {
  return (
    <li className={styles.articleCard} key={props.id}>
      <p>
        Title: <Link to={`articles/${props.id}`}>{props.title} </Link>
      </p>
      <p>Author: {props.author}</p>
      <p>Comment count: {props.comment_count}</p>
    </li>
  );
}

export default ArticlesCards;
