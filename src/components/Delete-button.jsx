import React from "react";
import * as api from "../api";

class DeleteComment extends React.Component {
  state = {
    isDeleting: false
  };
  handleClick = e => {
    this.setState({ isDeleting: true });
    api.deleteComment(this.props.id).then(res => {
      this.setState({ isDeleting: false });
    });
  };

  render() {
    if (this.state.isDeleting) return <p>Deleting...</p>;
    return <button onClick={this.handleClick}>Delete Comment</button>;
  }
}

export default DeleteComment;
