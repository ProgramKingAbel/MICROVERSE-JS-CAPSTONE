import { fetchShows, fetchLikes } from './modules/showsApi.js';
import displayShows from './modules/displayShows.js';
import './styles/main.css';

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
