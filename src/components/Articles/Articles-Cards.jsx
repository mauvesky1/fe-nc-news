import React from "react";
import { Link } from "@reach/router";
import styles from "./Articles-Cards.module.css";
import VoteButton from "../Votes-button";

function ArticlesCards(props) {
  return (
    <li key={props.id}>
      <p>
        Title: <Link to={`/articles/${props.id}`}>{props.title} </Link>
      </p>
      <p>Author: {props.author}</p>
      <p>Number of comments: {props.comment_count}</p>
      <p>
        <VoteButton votes={props.votes} cardType="articles" id={props.id} />
      </p>
      <p>Created_at: {new Date(props.created_at).toString().slice(0, 16)} </p>
    </li>
  );
}

export default ArticlesCards;
