import React from "react";
import ArticlesCard from "./Articles-Cards";

import * as api from "../api";

class Topics extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    topicsList: ["coding", "football"]
  };

  componentDidMount = () => {
    api.fetchAllArticles(this.props.topic).then(data => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.topicsList}</p>
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
      </div>
    );
  }
}

export default Topics;
