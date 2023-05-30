import fetchShows from './modules/showsApi.js';
import './styles/main.css';

for (let i = 1; i < 7; i += 1) {
  fetchShows(i);
}
