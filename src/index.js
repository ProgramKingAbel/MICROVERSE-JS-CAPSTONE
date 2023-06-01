import displayShows from './modules/displayShows.js';
import './styles/main.css';

// Make requests and get data from the two API's combine data and Display

const fetchData = async (link) => fetch(link)
  .then((response) => response.json());

const fetchShows = fetchData('https://api.tvmaze.com/shows');
const fetchLikes = fetchData('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDeldDFM61dNTEWtzoPU/likes');

Promise.all([fetchShows, fetchLikes])
  .then(([show, likes]) => {
    const allData = show.map((item1) => {
      const commonItem = likes.find((item2) => item2.item_id === item1.id);

      return {
        ...item1,
        ...commonItem,
      };
    });
    displayShows(allData);
  });
