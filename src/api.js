import React from "react";
import axios from "axios";

const baseURL = "https://be-northcoders-news.herokuapp.com/api";

export const fetchAllArticles = topic => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic }
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchSingleArticle = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`);
};

export const fetchComments = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`);
};

export const fetchAllTopics = () => {
  return axios.get(`${baseURL}/topics`);
};

export const patchVote = (cardType, id) => {
  return axios.patch(`${baseURL}/${cardType}/${id}`, { inc_votes: 1 });
};
