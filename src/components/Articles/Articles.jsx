import React from "react";

import ArticlesCard from "./Articles-Cards";
import * as api from "../../api";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true
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
  //     console.log("hurrah");
  //   }
  // };
  componentDidMount = () => {
    api.fetchAllArticles().then(({ data }) => {
      this.setState({ articles: data.articles });
    });
  };

  render() {
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
            <label>
              <input type="radio" name="sort" value="comment_count" /> No. of
              Comments
            </label>
            <div>
              In order:
              <label>
                <input type="radio" name="order" value="asc" /> Ascending{" "}
              </label>
              <label>
                <input type="radio" name="order" value="desc" /> Descending{" "}
              </label>
              <button>Submit</button>
            </div>
          </form>
        </>
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
