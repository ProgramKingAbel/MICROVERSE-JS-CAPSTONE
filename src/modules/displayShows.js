const displayShows = (data) => {
  const mainContainer = document.querySelector('#shows-container');
  const card = document.createElement('div');
  card.classList = 'show';
  card.innerHTML = `

    <img src="${data.image.original}" />
    <p class="show-name">${data.name}</p>
    <div class="likes">
        <i class="uil uil-heart-alt"></i>
        <span></span>
        1 likes
    </div>              
    <button class="comments">Comments</button>
    <button class="reservations">Reservations</button>
    
    `;
  mainContainer.appendChild(card);
};

export default displayShows;