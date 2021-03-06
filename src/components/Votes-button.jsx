import React from "react";
import * as api from "../api";
import Button from "react-bootstrap/Button";

class VoteButton extends React.Component {
  state = {
    voteDifference: 0,
    error: false
  };

  handleClick = event => {
    this.increaseVotes();
  };
  increaseVotes = () => {
    const { cardType, id } = this.props;
    // eslint-disable-next-line no-restricted-globals

    api.patchVote(cardType, id).catch(err => {
      this.setState(currentState => {
        return {
          error: true,
          voteDifference: currentState.voteDifference - 1
        };
      });
    });

    this.setState(currentState => {
      return {
        voteDifference: currentState.voteDifference + 1
      };
    });
  };
  render() {
    const { voteDifference, error } = this.state;

    return (
      <>
        {" "}
        {error ? <p>Error. Could not vote</p> : null}
        <div>
          <p>
            Votes: {this.props.votes + voteDifference}
            <button
              className={Button}
              disabled={voteDifference !== 0}
              onClick={this.handleClick}
            >
              Vote
            </button>
          </p>
        </div>
      </>
    );
  }
}

export default VoteButton;
