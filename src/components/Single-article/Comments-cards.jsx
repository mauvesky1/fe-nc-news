import React from "react";
import VoteButton from "../Votes-button";
import styles from "./Comments-cards.module.css";

function CommentsCards(props) {
  return (
    <ul>
      {props.comments.map(comment => {
        return (
          <li className={styles.listItems} key={comment.comment_id}>
            <p>
              {comment.body}

              <p> Written by:{comment.author} </p>

              <VoteButton
                votes={comment.votes}
                cardType="comments"
                id={comment.comment_id}
              />
            </p>
            Written on: {new Date(comment.created_at).toString().slice(0, 16)}
          </li>
        );
      })}
    </ul>
  );
}

export default CommentsCards;
