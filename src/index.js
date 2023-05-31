import { fetchShows, fetchLikes } from './modules/showsApi.js';
import displayShows from './modules/displayShows.js';
import './styles/main.css';

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
  });
