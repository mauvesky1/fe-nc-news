import React from "react";
import * as api from "../../api";

class SortForm extends React.Component {
  state = {
    sortValue: "null",
    votes: false,
    created_at: false,
    comment_count: false,
    asc: false,
    desc: false
  };
  clickHandler = e => {
    e.preventDefault();
    this.props.toggleIsLoading();
    this.props.updateList(e.target.sort.value, e.target.order.value);
  };

  render() {
    return (
      <>
        {" "}
        Sort by:
        <form
          onSubmit={e => {
            this.clickHandler(e);
          }}
        >
          <label>
            <input
              value={this.state.votes}
              type="radio"
              onChange={e => {
                this.setState(currentState => {
                  return { votes: !currentState.votes };
                });
              }}
              name="sort"
              value="votes"
            />{" "}
            Votes{" "}
          </label>
          <label>
            <input
              value={this.state.created_at}
              onChange={e => {
                this.setState(currentState => {
                  return { created_at: !currentState.created_at };
                });
              }}
              type="radio"
              name="sort"
              value="created_at"
            />{" "}
            Created at
          </label>
          <label>
            <input
              value={this.state.comment_count}
              onChange={e => {
                console.log(this.state);
                this.setState(currentState => {
                  return { comment_count: !currentState.comment_count };
                });
              }}
              type="radio"
              name="sort"
              value="comment_count"
            />{" "}
            No. of Comments
          </label>
          In order:
          <label>
            <input
              value={this.state.asc}
              onChange={e => {
                this.setState(currentState => {
                  return { asc: !currentState.asc };
                });
              }}
              type="radio"
              name="order"
              value="asc"
            />{" "}
            Ascending{" "}
          </label>
          <label>
            <input
              value={this.state.desc}
              onChange={e => {
                this.setState(currentState => {
                  return { desc: !currentState.desc };
                });
              }}
              type="radio"
              name="order"
              value="desc"
            />{" "}
            Descending{" "}
          </label>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
export default SortForm;
