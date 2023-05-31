import fetchShows from './modules/showsApi.js';
import './styles/main.css';

// const api=`https://api.tvmaze.com/shows/${id}`;
// const newData= await fetch(api).then((res)=>res.json).then(data);

for (let i = 1; i < 7; i += 1) {
  fetchShows(i);
}
