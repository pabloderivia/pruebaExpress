function loadMovies() {
  return [
    { id: 0, name: "Los Vengadores" },
    { id: 1, name: "Lo que el viento se llevó" }
  ];
}

const bodyIsEmpty = reqBody => {
  if (req.body === undefined) return true;
};
var express = require("express");
var router = express.Router();
var movies = loadMovies();

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find(movie => movie.id == id);
  res.send(movie);
});

router.post("/newMovie", (req, res) => {
  const newMovie = req.body; //el contenido del 'mensaje' que enviaremos será la nueva peli
  newMovie.id = Math.random(); //le metemos un nuevo id random
  movies.push(newMovie); // añadimos el nuevo elemento al array
  res.json({ message: "new movie added with no problems" }); //la response, lo qu envías
});

router.post("/", (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length;
  movies.push(newMovie);
  res.json(newMovie);
});

function safeMovie(movie) {
  const result = movie;
  delete result.id;
  return result;
}

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const newMovie = safeMovie(req.body);

  const oldMovie = movies.find(movie => movie.id == id);
  const position = movies.findIndex(movie => movie.id == id);

  const movieToInsert = { ...oldMovie, ...newMovie, id: req.params.id };
  movies[position] = movieToInsert;
  res.json({ message: "todo ok" });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const movieIndex = movies.findIndex(movie => movie.id == id);
  movies.slice(movieIndex, 1);
  _.remove(movies, movie);
  res.json({ message: "OK" });
});

module.exports = router;
