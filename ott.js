// Sample movie data (replace with API call or database)
const movies = [
    { title: "Movie 1", poster: "https://via.placeholder.com/150" },
    { title: "Movie 2", poster: "https://via.placeholder.com/150" },
    { title: "Movie 3", poster: "https://via.placeholder.com/150" },
    // Add more movies here
];

// Function to create movie poster elements
function createMoviePoster(movie) {
    const poster = document.createElement("img");
    poster.src = movie.poster;
    poster.alt = movie.title;
    return poster;
}

// Add movie posters to carousel and movie grid sections
const carousel = document.querySelector(".carousel");
const movieGrid = document.querySelector(".movie-grid");

movies.forEach((movie) => {
    carousel.appendChild(createMoviePoster(movie));
    movieGrid.appendChild(createMoviePoster(movie
