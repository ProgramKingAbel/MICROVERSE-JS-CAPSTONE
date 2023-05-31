const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/comments';

const addComments = (comment) => {
  const commentList = document.getElementById('comment-list');
  const list = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = `${comment.creation_date}  ${comment.username}:  ${comment.comment}`;
  list.appendChild(span);
  commentList.appendChild(list);
};

export const displayComments = async (targetMovie) => {
  const response = await fetch(`${API}?item_id=${targetMovie}`);
  const comments = await response.json();
  comments.forEach((comment) => addComments(comment));
};

export const postComment = async (itemId, username, comment) => {
  const newComment = {
    itemId, username, comment, creation_date: new Date().toISOString(),
  };

  addComments(newComment);

  const response = await fetch(API,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ itemId, username, comment }),
    });
  const data = await response.json();

  return data.result;
};
