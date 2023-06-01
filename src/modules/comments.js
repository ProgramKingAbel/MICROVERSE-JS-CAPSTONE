const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/comments';

const addComments = (comment) => {
  console.log('Adding comment:', comment);
  const commentList = document.getElementById('comment-list');
  const list = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = `${comment.creation_date}  ${comment.username}:  ${comment.comment}`;
  list.appendChild(span);
  commentList.appendChild(list);
};

export const displayComments = (targetMovie) => {
  fetch(`${API}?item_id=${targetMovie}`)
    .then((response) => response.json())
    .then((comments) => {
      for (let i = 0; i < comments.length; i += 1) {
        addComments(comments[i]);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const postComment = (itemId, username, comment) => {
  const newComment = {
    item_id: itemId,
    username,
    comment,
    creation_date: new Date().toISOString(),
  };
  addComments(newComment);
  return fetch(API, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ item_id: itemId, ...newComment }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error posting comment');
      }
      return response.json();
    })
    .then((data) => data.result)
    .catch((error) => {
      console.error('Error:', error);
    });
};

fetch(API)
  .then((response) => response.text())
  .then((data) => console.log('Response:', data))
  .catch((error) => console.error('Error:', error));
