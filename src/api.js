import React from "react";
import axios from "axios";

export const fetchAllArticles = topic => {
  return axios
    .get("https://be-northcoders-news.herokuapp.com/api/articles", {
      params: { topic }
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchSingleArticle = article_id => {
  return axios.get(
    `https://be-northcoders-news.herokuapp.com/api/articles/${article_id}`
  );
};

export const fetchComments = id => {
  return axios.get(
    `https://be-northcoders-news.herokuapp.com/api/articles/${id}/comments`
  );
};
