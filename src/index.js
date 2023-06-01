import { fetchShows, fetchLikes } from './modules/showsApi.js';
import allShows from './modules/showsCounter.js';
import displayShows from './modules/displayShows.js';
import './styles/main.css';

// Make requests and get data from the two API's combine data and Display
Promise.all([fetchShows, fetchLikes])
  .then(([shows, likes]) => {
    const allData = shows.map((show) => {
      const commonItem = likes.find((item) => item.item_id === show.id);
      return {
        ...show,
        ...commonItem,
      };
    });
    displayShows(allData);
    allShows(allData);
  });
