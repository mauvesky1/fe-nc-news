import React from "react";
import * as api from "../../api";
import CommentsCards from "./Comments-cards";
import AddComment from "./Add-comment";
import ErrorPage from "../Error-page";

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    comments: [],
    toggleComments: false,
    hasError: false
  };

  showComments = () => {
    api.fetchComments(this.props.article_id).then(({ data }) => {
      this.setState(currentState => {
        return {
          comments: data.comments,
          toggleComments: !currentState.toggleComments
        };
      });
    });
  };

  componentDidMount = () => {
    api.fetchSingleArticle(this.props.article_id).then(({ data }) => {
      if (data.article === undefined) {
        this.setState({ hasError: true, isLoading: false });
      }
      this.setState({ article: data.article, isLoading: false });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.comments.length !== this.state.comments.length) {
      //when adding a comment
    }
  };
  render() {
    const {
      article,
      isLoading,
      comments,
      toggleComments,
      hasError
    } = this.state;

    if (isLoading) {
      return <p>loading 123...</p>;
    }
    if (hasError === true) {
      return <ErrorPage status={hasError.response.status} msg={hasError.msg} />;
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
        <AddComment />
      </div>
    );
  }
}

export default SingleArticle;
