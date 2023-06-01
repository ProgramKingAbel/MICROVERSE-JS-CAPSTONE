const allShows = (data) => {
  const total = data.length;
  const container = document.querySelector('.total');
  return container.innerHTML = total;
};

export default allShows;