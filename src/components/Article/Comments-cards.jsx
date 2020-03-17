import React from "react";
import styles from "./Comments-cards.module.css";

function CommentsCards(props) {
  return (
    <ul>
      {props.comments.map(comment => {
        return (
          <li className={styles.listItems} key={comment.comment_id}>
            <p>
              {comment.body} {comment.author} {comment.votes}
            </p>
            Written: {new Date(comment.created_at).toString().slice(0, 16)}
          </li>
        );
      })}
    </ul>
  );
}

export default CommentsCards;
