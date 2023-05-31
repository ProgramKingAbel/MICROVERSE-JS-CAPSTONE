import { openComment } from './popUp-comments.js';

const displayShows = (data) => {
  data.forEach((e) => {
    const mainContainer = document.querySelector('#shows-container');
    const card = document.createElement('div');
    card.classList = 'show';
    card.innerHTML = `
    <img src="${e.image.original}" />
    <p class="show-name">${e.name}</p>
    <div class="likes">
        <i class="uil uil-heart-alt"></i>
        <span>${e.likes} likes</span>
        
    </div>              
    <button class="comment" id="${e.name}">Comments</button>
    <button class="reservations">Reservations</button>
    `;
    mainContainer.appendChild(card);

    openComment(e);
  });
};

export default displayShows;