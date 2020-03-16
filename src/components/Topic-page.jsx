import React from "react";
import ArticlesCard from "./Articles-Cards";

import * as api from "../api";

class Topics extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount = () => {
    api.fetch(this.props.topic).then(data => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  };

  render() {
    return (
      <ul>
        {this.state.articles.map(article => {
          return (
            <ArticlesCard
              id={article.article_id}
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

export default Topics;
