import displayShows from './displayShows.js';


// const fetchShows = async (id) => {
//   await fetch(`https://api.tvmaze.com/shows/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       displayShows(data);
//     });
// };

// Make requests from the two API's

const fetchShows = async (id) => {
  await fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json());
};

const fetchLikes = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/likes')
    .then(response => response.json());
}

export default fetchShows;