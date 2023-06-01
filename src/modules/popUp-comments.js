import { displayComments, postComment } from './comments.js';

import { fetchShows } from './showsApi.js';

const popupOverlay = document.getElementById('popupOverlay');
const popupContent = document.getElementById('popupContent');

export const showPopup = (data, targetMovie) => {
  const filterResult = data.filter((item) => item.id === targetMovie);
  // Set the content of the popup
  popupContent.innerHTML = `
    <span class="popup-close">&times;</span>
    <div class="data-details">
    <img id="api-image" src="${filterResult[0].image.original}" />
    <div class="like-container">
      <p class="show-name">${filterResult[0].name}</p>
      <div class="likes">
        <i class="uil uil-heart-alt"></i>
        <span>${filterResult[0].likes} likes</span>
      </div>
    </div>
    </div>
    <ul id='comment-list'></ul>  
    <div class="submit-container">
      <h2 class="comment-title">Add Comments</h2>            
      <form id="comments-form">
        <div>
          <input type="hidden" id="movieId" name="movieId" value="${filterResult[0].id}">
          <input type="text" id="username" placeholder="Your name">
          <input type="text" id="comment" placeholder="Your insights">
        </div>
        <button id="new-comment-btn" type="submit" class="btn">Submit</button>
      </form>
    </div>
    `;
  popupOverlay.style.display = 'flex';

  document.addEventListener('submit', async (event) => {
    if (event.target.id === 'comments-form') {
      event.preventDefault();
      const itemId = document.querySelector('#movieId').value;
      const username = document.querySelector('#username').value;
      const comment = document.querySelector('#comment').value;

      if (username !== '' && comment !== '') {
        document.querySelector('#username').value = '';
        document.querySelector('#comment').value = '';

        await postComment(itemId, username, comment);
      }
    }
  });
};

export default async function showSelectedMovie(targetMovie) {
  const data = await fetchShows;
  showPopup(data, targetMovie);
  displayComments(targetMovie);
}

document.addEventListener('click', (event) => {
  const closeButton = event.target.closest('.popup-close');
  if (closeButton) {
    popupOverlay.style.display = 'none';
  }
});
