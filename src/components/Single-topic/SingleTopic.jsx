import React from "react";
import * as api from "../../api";
import ArticlesList from "../Articles/Articles-Cards";
import SortForm from "../Articles/Sort-form";

class SingleTopic extends React.Component {
  state = {
    isLoading: true,
    articles: [],
    sort_by: undefined,
    order_by: undefined,
    page: 1,
    total_count: 0
  };

  toggleIsLoading = () => {
    this.setState({ isLoading: true });
  };

  updateList = (sort_value, order_value) => {
    this.setState({
      sort_by: sort_value,
      order_by: order_value,
      isLoading: false
    });
  };

  changePage = direction => {
    this.setState(currentState => {
      if (currentState.page)
        return { page: currentState.page + direction, isLoading: true };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { page, sort_by, order_by } = this.state;
    if (
      prevState.page !== page ||
      prevState.order_by !== order_by ||
      sort_by !== prevState.sort_by
    ) {
      api
        .fetchAllArticles(this.props.topic, sort_by, order_by, page)
        .then(({ data }) => {
          this.setState({
            articles: data.articles,
            isLoading: false,
            total_count: data.total_count
          });
        });
    }
  };
  componentDidMount = () => {
    api.fetchAllArticles(this.props.topic).then(({ data }) => {
      this.setState({
        articles: data.articles,
        isLoading: false,
        total_count: data.total_count
      });
    });
  };

  render() {
    const { topic, path } = this.props;
    if (this.state.isLoading) return <h3>Loading...</h3>;
    return (
      <>
        <>
          {" "}
          <SortForm
            updateList={this.updateList}
            toggleIsLoading={this.toggleIsLoading}
          />
        </>
        <ArticlesList articles={this.state.articles} />
        Current Page:{this.state.page}
        <button
          disabled={this.state.page === 1}
          onClick={e => {
            return this.changePage(-1);
          }}
        >
          Previous page
        </button>
        <button
          disabled={Math.ceil(this.state.total_count / 10) <= this.state.page}
          onClick={e => {
            return this.changePage(1);
          }}
        >
          Next page
        </button>
      </>
    );
  }
}

export default SingleTopic;
