import axios from 'axios';
import { commentCounter } from './commentCounter.js';

const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5rCENfy6BiEfx1fK3Ijn/comments';

const addComments = (comment) => {
  const commentList = document.getElementById('comment-list');
  const list = document.createElement('li');
  list.classList.add('list-comment');
  const span = document.createElement('span');
  span.innerHTML = `${comment.creation_date}  ${comment.username}:  ${comment.comment}`;
  list.appendChild(span);
  commentList.appendChild(list);
  // comment counter:
  const counter = document.getElementById('comment-counter');
  const countComments = commentCounter(
    document.querySelectorAll('.list-comment'),
  );
  counter.innerHTML = `comments: (${countComments})`;
};

export const displayComments = async (targetMovie) => {
  const response = await fetch(`${API}?item_id=${targetMovie}`);
  const comments = await response.json();

  for (let i = 0; i < comments.length; i += 1) {
    addComments(comments[i]);
  }
};

export const postComment = async (itemId, username, comment) => {
  const newComment = {
    item_id: itemId,
    username,
    comment,
    creation_date: new Date().toISOString(),
  };

  addComments(newComment);

  try {
    const response = await axios.post(API, newComment);
    return response.data.result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
