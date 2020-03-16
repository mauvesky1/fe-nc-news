import React from "react";

import axios from "axios";
import ArticlesCard from "./Articles-Cards";

class Articles extends React.Component {
  state = {
    articles: [
      {
        title: "an arraaay of objects",
        votes: 0,
        author: "weegembump",
        comment_count: 6,
        article_id: 33,
        created_at: "2018-04-16T19:29:32.774Z"
      },
      {
        title: "an arrayb of objects",
        votes: 0,
        author: "weegembump",
        comment_count: 6,
        article_id: 33
      },
      {
        title: "an array of objects",
        votes: 0,
        author: "weegembump",
        comment_count: 6,
        article_id: 33
      }
    ],
    isLoading: true
  };
  componentDidMount = () => {
    axios
      .get("https://be-northcoders-news.herokuapp.com/api/articles/")
      .then(({ data }) => {
        console.log("mounting");
        this.setState({ articles: data.articles });
      });
  };

  render() {
    return (
      <ul>
        {this.state.articles.map(article => {
          return (
            <ArticlesCard
              author={article.author}
              votes={article.votes}
              title={article.title}
              comment_count={article.comment_count}
            />
          );
        })}
      </ul>
    );
  }
}

export default Articles;
