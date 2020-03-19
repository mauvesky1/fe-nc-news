import React from "react";
import * as api from "../../api";
import CommentsCards from "./Comments-cards";
import AddComment from "./Add-comment";
import ErrorPage from "../Error-page";
import VoteButton from "../Votes-button";

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    comments: [],
    toggleComments: false,
    hasError: false,
    toggleAddForm: false,
    addCommentCounter: 0
  };

  activateAddComment = e => {
    this.setState({ toggleAddForm: true });
  };

  forceAnUpdate = () => {
    this.setState({
      toggleAddForm: false
    });
  };

  updateComments = comment => {
    this.setState(currentState => {
      return {
        toggleAddForm: !currentState.toggleAddForm,
        comments: [comment, ...currentState.comments],
        addCommentCounter: currentState.addCommentCounter + 1
      };
    });
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
      hasError,
      toggleAddForm
    } = this.state;

    if (isLoading) {
      return <h3>loading 123...</h3>;
    }
    if (hasError === true) {
      return <ErrorPage status={hasError.response.status} msg={hasError.msg} />;
    }
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <VoteButton
          votes={article.votes}
          cardType="articles"
          id={article.article_id}
        />
        <p>Author: {article.author}</p>
        <p>
          Comment Count:{" "}
          {article.comment_count > comments.length
            ? article.comment_count
            : comments.length}
        </p>{" "}
        <button
          onClick={e => {
            this.showComments();
          }}
        >
          {toggleComments ? "Hide Comments" : "Show Comments"}
        </button>
        <button onClick={this.activateAddComment}>Add Comment</button>
        {toggleAddForm && (
          <AddComment
            username={this.props.username}
            article_id={this.props.article_id}
            updateComments={this.updateComments}
          />
        )}
        {toggleComments ? (
          <CommentsCards
            comments={comments}
            username={this.props.username}
            forceAnUpdate={this.forceAnUpdate}
          />
        ) : null}
      </div>
    );
  }
}

export default SingleArticle;
