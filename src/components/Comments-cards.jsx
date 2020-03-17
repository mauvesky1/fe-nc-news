import React from "react";
import styles from "./Comments-cards.module.css";

function CommentsCards(props) {
  console.log("YOU ARE HERE", props.comments[0]);

  return (
    <ul>
      {props.comments.map(comment => {
        return (
          <li className={styles.listItems} key={comment.comment_id}>
            <p>
              {comment.body} {comment.author} {comment.votes}
            </p>
            {comment.created_at}
          </li>
        );
      })}
    </ul>
  );
}

export default CommentsCards;
