const allShows = data => {
    const container = document.querySelector('.total');
    const total = data.length;
    container.innerHTML = total;
}

export default allShows;