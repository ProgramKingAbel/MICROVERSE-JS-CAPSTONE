const popupOverlay = document.getElementById('popupOverlay');
const popupContent = document.getElementById('popupContent');

const showPopup = (data) => {
  // Set the content of the popup
  popupContent.innerHTML = `
    <span class="popup-close">&times;</span>
    <img id="api-image" src="${data.image.original}" />
    <p class="show-name">${data.name}</p>
    <div class="likes">
        <i class="uil uil-heart-alt" id="likes"></i>
        <span>${data.likes} likes</span>
    </div>              
    <button class="comment">Comments</button>
    <button class="reservations">Reservations</button>
    `;

  popupOverlay.style.display = 'flex';
};

export const openComment = (data) => {
  document.addEventListener('click', (event) => {
    if (event.target.id === `${data.name}`) {
      showPopup(data);
    }
  });
};

document.addEventListener('click', (event) => {
  const closeButton = event.target.closest('.popup-close');
  if (closeButton) {
    popupOverlay.style.display = 'none';
  }
});

export default showPopup;