import React from "react";
import * as api from "../../api";
import ArticlesCard from "../Articles/Articles-Cards";
import SortForm from "../Articles/Sort-form";

class SingleTopic extends React.Component {
  state = {
    isLoading: true,
    articles: []
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
      this.setState({ articles: data.articles });
    });
  };

  render() {
    const { topic, path } = this.props;
    return (
      <>
        <>
          {" "}
          Sort by:
          <form onSubmit={this.clickHandler}>
            <label>
              <input id="Votes" type="radio" name="sort" value="votes" /> Votes{" "}
            </label>
            <label>
              <input type="radio" name="sort" value="created_at" /> Created at
            </label>
            In order:
            <label>
              <input type="radio" name="order" value="asc" /> Ascending{" "}
            </label>
            <label>
              <input type="radio" name="order" value="desc" /> Descending{" "}
            </label>
            <button>Submit</button>
          </form>
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
