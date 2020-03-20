import React from "react";
import ArticlesCard from "./Articles-Cards";
import SortForm from "./Sort-form";
import * as api from "../../api";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    page: 1,
    total_count: 0,
    sort_by: undefined,
    order_by: undefined
  };

  changePage = direction => {
    this.setState(currentState => {
      if (currentState.page)
        return { page: currentState.page + direction, isLoading: true };
    });
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

  componentDidUpdate = (prevProps, prevState) => {
    const { page, sort_by, order_by } = this.state;
    if (
      prevState.page !== page ||
      prevState.order_by !== order_by ||
      sort_by !== prevState.sort_by
    ) {
      api
        .fetchAllArticles(undefined, sort_by, order_by, page)
        .then(({ data }) => {
          this.setState({ articles: data.articles, isLoading: false });
        });
    }
  };
  componentDidMount = () => {
    api.fetchAllArticles().then(({ data }) => {
      this.setState({
        articles: data.articles,
        isLoading: false,
        total_count: data.total_count
      });
    });
  };

  render() {
    if (this.state.isLoading) return <h3>loading..</h3>;
    return (
      <>
        <SortForm
          updateList={this.updateList}
          toggleIsLoading={this.toggleIsLoading}
        />
        <ul>
          {this.state.articles.map(article => {
            return (
              <ArticlesCard
                id={article.article_id}
                author={article.author}
                votes={article.votes}
                title={article.title}
                comment_count={article.comment_count}
                created_at={article.created_at}
              />
            );
          })}
        </ul>
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

export default Articles;
