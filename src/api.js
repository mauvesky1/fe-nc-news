import React from "react";
import axios from "axios";

export const fetch = topic => {
  return axios
    .get("https://be-northcoders-news.herokuapp.com/api/articles", {
      params: { topic }
    })
    .then(({ data }) => {
      return data;
    });
};
