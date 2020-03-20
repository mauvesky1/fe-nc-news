import React from "react";
import axios from "axios";

const baseURL = "https://be-northcoders-news.herokuapp.com/api";

export const fetchAllArticles = (topic, sort_by, order_by, p) => {
  return axios.get(`${baseURL}/articles`, {
    params: { topic, order_by, sort_by, p }
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

export const postComment = (username, body, id) => {
  return axios.post(`${baseURL}/articles/${id}/comments`, { username, body });
};

export const deleteComment = id => {
  return axios.delete(`${baseURL}/comments/${id}`);
};
