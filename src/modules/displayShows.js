import { openComment } from './popUp-comments.js';
import addLike  from './showsApi.js';

const displayShows = (data) => {
  data.forEach((e) => {
    const mainContainer = document.querySelector('#shows-container');
    const card = document.createElement('div');
    card.classList = 'show';
    card.innerHTML = `
    <img src="${e.image.original}" />
    <p class="show-name">${e.name}</p>
    <div class="likes">
        <i class="uil uil-heart-alt showLikes" id="${e.item_id}"></i>
        <span class="likes-counter">${e.likes} likes</span>
        
    </div>              
    <button class="comment" id="${e.name}">Comments</button>
    <button class="reservations">Reservations</button>
    `;
    mainContainer.appendChild(card);

    openComment(e);
   
    

  });
  updateLikes();
};

 export const updateLikes = () => {
   const likeBtn = document.querySelectorAll('.likes-counter');
   likeBtn.forEach((btn, b) => {
     btn.addEventListener('click', () => {
       let id = b;
       id += 1;
       addLike(id);     
     })
   }) 
   
}

export default displayShows;