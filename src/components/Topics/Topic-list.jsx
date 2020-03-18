import React from "react";
import { Link } from "@reach/router";
// import styles from "";

function TopicList(props) {
  return (
    <ul>
      {props.topics.map(topic => (
        <li key={topic.slug}>
          <h2> {topic.slug}</h2>
          <p> {topic.description}</p>
          <Link to={`/topics/${topic.slug}`}>
            <button>Articles</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
// moment -> 15 days ago
// javascript date objects

export default TopicList;
