import React from "react";
import * as api from "../../api";
// need to import a method to set state.
// to be used on the lists of all articles and list of articles in topic pages.
// invoke with path so it knows where it is and set the right state.

function SortForm({ updateList, toggleIsLoading }) {
  const clickHandler = e => {
    e.preventDefault();
    toggleIsLoading();
    updateList(e.target.sort.value, e.target.order.value);
  };

  return (
    <>
      {" "}
      Sort by:
      <form
        onSubmit={e => {
          clickHandler(e);
        }}
      >
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
