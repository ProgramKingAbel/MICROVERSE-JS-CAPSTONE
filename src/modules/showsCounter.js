const allShows = (data) => {
  const total = data.length;
  const container = document.querySelector('.total');
  container.innerHTML = total;
  return container.innerHTML;
};

export default allShows;