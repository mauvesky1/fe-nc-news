import React from "react";
import * as api from "../../api";
// need to import a method to set state.
// to be used on the lists of all articles and list of articles in topic pages.
// invoke with path so it knows where it is and set the right state.

const clickHandler = (e, updateList, toggleIsLoading) => {
  toggleIsLoading();
  e.preventDefault();

  api
    .fetchAllArticles(undefined, e.target.sort.value, e.target.order.value)
    .then(({ data }) => {
      console.log(data.articles);
      updateList(data.articles);
      // call a method to update state.
    });
};

function SortForm({ updateList, toggleIsLoading }) {
  console.log(toggleIsLoading);
  return (
    <>
      {" "}
      Sort by:
      <form
        onSubmit={e => {
          clickHandler(e, updateList, toggleIsLoading);
        }}
      >
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
  );
}

export default SortForm;
