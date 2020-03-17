import React from "react";
import * as api from "../api";

class SingleArticle extends React.Component {
  state = { article: {}, isLoading: true };

  componentDidMount = () => {
    api.fetchSingleArticle(this.props.article_id).then(({ data }) => {
      console.log(data.article);
      this.setState({ article: data.article, isLoading: false });
    });
  };
  render() {
    const { article, isLoading } = this.state;
    if (isLoading) {
      return <p>loading 123</p>;
    }
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <button>Upvote:{article.votes}</button>
        <p>Author: {article.author}</p>
        <p>Comment Count: {article.comment_count}</p>{" "}
        <button onClick={e => {}}>Show comments</button>
      </div>
    );
  }
}

export default SingleArticle;
