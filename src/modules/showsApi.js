const fetchData = async (link) => fetch(link)
  .then((response) => response.json());

export const fetchShows = fetchData('https://api.tvmaze.com/shows');
export const fetchLikes = fetchData('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/likes');


// function to handle Likes.
const addLike = (id) => {
  const apiBody = {
    item_id: id,
  };

  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charsert=UTF-8',
    },
    body: JSON.stringify(apiBody),
  })
    .then(() => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/likes'))
    .then((response) => response.json())
    .then((data) => {
      // Live Updates the Like button
      let newId = id;
      newId -= 1;
      const likeBtn = document.querySelectorAll('.likes-counter')[newId];
      data.forEach((like) => {
        if (like.item_id === id) {
          likeBtn.innerHTML = `${like.likes} likes`;
        }
      });
    });
};
export default addLike;
