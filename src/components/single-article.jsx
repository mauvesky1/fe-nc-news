import React from "react";
import * as api from "../api";
import CommentsCards from "./Comments-cards";

class SingleArticle extends React.Component {
  state = { article: {}, isLoading: true, comments: [], toggleComments: false };

  showComments = () => {
    // and display them
    api.fetchComments(this.props.article_id).then(({ data }) => {
      this.setState({
        comments: data.comments,
        toggleComments: !this.state.toggleComments
      });
    });
  };

  componentDidMount = () => {
    api.fetchSingleArticle(this.props.article_id).then(({ data }) => {
      this.setState({ article: data.article, isLoading: false });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.comments.length !== this.state.comments.length) {
      // when adding a comment
    }
  };
  render() {
    const { article, isLoading, comments, toggleComments } = this.state;

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
        <button
          onClick={e => {
            this.showComments();
          }}
        >
          {toggleComments ? "Hide Comments" : "Show Comments"}
        </button>
        {toggleComments ? <CommentsCards comments={comments} /> : null}
      </div>
    );
  }
}

export default SingleArticle;
