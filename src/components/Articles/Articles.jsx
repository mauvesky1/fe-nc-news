import React from "react";
import ArticlesCard from "./Articles-Cards";
import SortForm from "./Sort-form";
import * as api from "../../api";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  toggleIsLoading = () => {
    this.setState({ isLoading: true });
  };

  updateList = articles => {
    this.setState({ articles: articles, isLoading: false });
  };

  clickHandler = e => {
    e.preventDefault();

    api
      .fetchAllArticles(undefined, e.target.sort.value, e.target.order.value)
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.articles != this.state.articles) {
  //     console.log("");
  //   }
  // };
  componentDidMount = () => {
    api.fetchAllArticles().then(({ data }) => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  };

  render() {
    if (this.state.isLoading) return <p>loading..</p>;
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
      </>
    );
  }
}

export default Articles;
