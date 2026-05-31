// Fetch movies from our backend API and render them
async function loadMovies() {
  const response = await fetch('/api/movies');
  const movies = await response.json();
  const grid = document.getElementById('movie-grid');

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.thumbnail}" alt="${movie.title}" />
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.genre} · ${movie.year}</p>
        <button class="play-btn" onclick="playMovie('${movie.video}')">▶ Play</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function playMovie(videoUrl) {
  document.getElementById('video-src').src = videoUrl;
  document.getElementById('video-player').load();
  document.getElementById('modal').classList.remove('hidden');
}

document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('video-player').pause();
});

loadMovies();