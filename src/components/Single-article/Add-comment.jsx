import React from "react";
import { render } from "@testing-library/react";
import * as api from "../../api";

class AddComment extends React.Component {
  state = {
    inputValue: ""
  };
  handleSubmit = e => {
    e.preventDefault();

    const { username, article_id } = this.props;

    api
      .postComment(username, this.state.inputValue, article_id)
      .then(({ data }) => {
        this.props.updateComments(data.comment);
      });
  };

  handleInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    if (this.props.username === "") return <p>Please Log in</p>;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Posting as username: {this.props.username}</p>
        <textarea
          value={this.state.inputVale}
          onChange={this.handleInput}
          rows="8"
          columns="220"
          required
          type="text"
        ></textarea>
        <button>Submit Comment</button>
      </form>
    );
  }
}

export default AddComment;
