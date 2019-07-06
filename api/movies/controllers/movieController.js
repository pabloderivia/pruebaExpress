/*importamos el lodash para manejar los arrays con mayor facilidad,
así como las "tools" y la fuente previamente definidas
*/
const lodash = require("lodash"); 
const bodyIsNotEmpty = require("../../tools/bodyIsProperlyWritten");
const idExists = require("../../tools/idExists");
let movieList = require("../sources/movies.js");
let movies = movieList.movieSource;
function getMovies() {
    return movies;
}

function getMovieById(id) {
    return movies.find(movie => movie.id === id );
}

function getMovieByName(name){
    return movies.find(movie => movie.name ===name);

}

function addMovie(newMovie) {
    if (bodyIsNotEmpty(newMovie)) {
        newMovie.id = `${ movies.length + 1 }`;
        movies.push(newMovie);
        movieList.saveStatus(movies);
        return newMovie;
    } else {
        return false;
    }
}

function updateMovie(id, movieToUpdate) {
    if (bodyIsNotEmpty(movieToUpdate)) {
        let moviePosition = movies.findIndex(movie => movie.id === id);
        if (moviePosition >= 0) {
          movies[moviePosition] = movieToUpdate;
          return movies[moviePosition];
        }
    } else {
        return false;
    }
}

function deleteMovie(id) {
    if (!idExists(movies, id)) {
        return false;
    } else {
        let movieToDelete = movies.find(movie => movie.id === id);
        lodash.pull(movies, movieToDelete);
        return true;
    }
}

function getLikes() {
    return movies.filter(movie => movie.like === true);
}

function likeMovie(id) {
    if (!idExists(movies, id)) {
        return false;
    } else {
        let likedMovie = movies.find(movie => movie.id === id);
        likedMovie.like = true;
        return true;
    }
}

function dislikeMovie(id) {
    if (!idExists(movies, id)) {
        return false;
    } else {
        let dislikedMovie = movies.find(movie => movie.id === id);
        dislikedMovie.like = false;
        return true;
    }
}

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
    getLikes,
    likeMovie,
    dislikeMovie
};
