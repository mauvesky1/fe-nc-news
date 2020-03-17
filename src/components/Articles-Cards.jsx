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
      <p>Created_at: {new Date(props.created_at).toString().slice(0, 16)}</p>
    </li>
  );
}
// moment -> 15 days ago
// javascript date objects

export default ArticlesCards;
