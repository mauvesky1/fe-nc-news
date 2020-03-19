import React from "react";
import * as api from "../../api";
import ArticlesCard from "../Articles/Articles-Cards";
import SortForm from "../Articles/Sort-form";

class SingleTopic extends React.Component {
  state = {
    isLoading: true,
    articles: []
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

  componentDidMount = () => {
    api.fetchAllArticles(this.props.topic).then(({ data }) => {
      this.setState({ articles: data.articles, isLoading: false });
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

        <ul>
          {this.state.articles.map(article => {
            return (
              <ArticlesCard
                path={path}
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

export default SingleTopic;
