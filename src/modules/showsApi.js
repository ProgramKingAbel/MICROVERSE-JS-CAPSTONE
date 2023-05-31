// Make requests from the two API's

const fetchData = async (link) => fetch(link)
  .then((response) => response.json());

const fetchShows = fetchData('https://api.tvmaze.com/shows');
const fetchLikes = fetchData('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/likes');

export { fetchShows, fetchLikes, fetchData };