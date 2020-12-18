import React from "react";
import { Link } from "@reach/router";
import styles from "./Articles-Cards.module.css";
import VoteButton from "../Votes-button";
// import SortForm from "./Sort-form";

function ArticlesList(props) {
  return (
    <div className={styles.wrapper}>
      <h2>Hello</h2>
      <ul>
        {props.articles.map((article) => {
          
          return (
            <li key={article.article_id}>
              <p>
                {" "}
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}{" "}
                </Link>
              </p>
              <p>Author: {article.author}</p>
              <p>Number of comments: {article.comment_count}</p>
              <div>
                <VoteButton
                  votes={article.votes}
                  cardType="articles"
                  id={article.article_id}
                />
              </div>
              <p>
                Created on:{" "}
                {new Date(article.created_at).toString().slice(0, 16)}{" "}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
