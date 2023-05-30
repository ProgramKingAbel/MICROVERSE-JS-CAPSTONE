import displayShows from './displayShows.js';

const fetchShows = async (id) => {
  await fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .then((data) => {
      displayShows(data);
    });
};

export default fetchShows;