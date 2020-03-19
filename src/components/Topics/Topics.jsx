import React from "react";
import ArticlesCard from "../Articles/Articles-Cards";
import TopicsList from "./Topic-list";

import * as api from "../../api";

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    topicsList: []
  };

  componentDidMount = () => {
    api.fetchAllTopics().then(({ data }) => {
      this.setState({ topics: data.topics, isLoading: false });
    });
  };

  render() {
    if (this.state.isLoading) return <h3> Loading</h3>;

    return (
      <div>
        <TopicsList topics={this.state.topics} />
      </div>
    );
  }
}

export default Topics;
