import React from "react";
import VoteButton from "../Votes-button";
import DeleteComment from "../Delete-button";
import styles from "../Articles/Articles-Cards.module.css";

function CommentsCards(props) {
  return (
    <div className={styles.wrapper}>
      <ul>
        {props.comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>
                {comment.body}

                <p>
                  Written by:{comment.author}{" "}
                  {comment.author === props.username ? (
                    <DeleteComment
                      removeComment={props.removeComment}
                      id={comment.comment_id}
                    />
                  ) : null}{" "}
                </p>

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
    </div>
  );
}

export default CommentsCards;
