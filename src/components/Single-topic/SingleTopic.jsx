import React from "react";
import * as api from "../../api";
import ArticlesCard from "../Articles/Articles-Cards";

class SingleTopic extends React.Component {
  state = {
    isLoading: true,
    articles: []
  };
  componentDidMount = () => {
    api.fetchAllArticles(this.props.topic).then(data => {
      this.setState({ articles: data.articles });
    });
  };

  render() {
    const { topic, path } = this.props;
    return (
      <>
        <p>THIS is fine {topic}</p>
        <ul>
          {this.state.articles.map(article => {
            return (
              <ArticlesCard
                path={path}
                id={article.article_id}
                author={article.author}
                votes={article.votes}
                title={article.title}
                comment_count={article.comment_count}
                created_at={article.created_at}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default SingleTopic;
