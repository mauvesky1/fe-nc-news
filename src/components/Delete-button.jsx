import React from "react";
import * as api from "../api";

class DeleteComment extends React.Component {
  state = {
    isDeleting: false,
    hasError: false
  };
  handleClick = e => {
    this.setState({ isDeleting: true });

    api
      .deleteComment(this.props.id)
      .then(res => {
        // invoke function to rerender cards.
        //
        console.log(this.props, "here");
        this.props.filterComments(this.props.id);
      })
      .catch(err => {
        console.log(err);
        this.setState({ isDeleting: false, hasError: true });
      });
  };

  render() {
    if (this.state.isDeleting) return <h3>Deleting...</h3>;
    if (this.state.hasError) return <h3>Something went wrong</h3>;
    return <button onClick={this.handleClick}>Delete Comment</button>;
  }
}

export default DeleteComment;
