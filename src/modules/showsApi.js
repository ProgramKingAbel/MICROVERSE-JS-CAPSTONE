//function to handle Likes.
const addLike = id => {

  const apiBody = {
    "item_id": id
  };

  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charsert=UTF-8',
    },
    body: JSON.stringify(apiBody)
  })
    .then(() => {
    
      return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/likes");
      
    })
    .then(response => response.json())
    .then(data => {
      // Live Updates the Like button
      let newId = id;
      newId -= 1;   
      const likeBtn = document.querySelectorAll('.likes-counter')[newId];
      data.forEach((like, i) => {
        if(like.item_id === id) {
          likeBtn.innerHTML = `${like.likes} likes`;
        }
      })    
    })
    
}
export default  addLike ;