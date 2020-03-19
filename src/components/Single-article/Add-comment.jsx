import React from "react";
import { render } from "@testing-library/react";
import * as api from "../../api";

// import styles from
// function AddComment(props) {
class AddComment extends React.Component {
  state = {
    inputValue: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    //errors
    // if (this.state.inputValue.length <= 2) {
    //   this.setState((rejection: true));
    // }
    const { username, article_id } = this.props;
    // console.log(
    //   username,
    //   "in the add comment",
    //   this.state.inputValue,
    //   "the last item is the id",
    //   article_id
    // );
    api.postComment(username, this.state.inputValue, article_id);
    // axios request with comment
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
