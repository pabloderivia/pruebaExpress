
const movieSource = [
    {"id":0,"name":"Los Vengadores"},
    {"id":1,"name":"Lo que el viento se llevó"},
    {"id":2, "name": "Enigma"}
]

function saveNewMovie (newMovie){
  movieSource.push();
}

function editMovie(id, movieToUpdate){
    let moviePosition = movieSource.findIndex(movie => movie.id === id);
    if (moviePosition >= 0) {
      movieSource[moviePosition] = movieToUpdate;
}}

function saveStatus(){
    const fs = require('fs');
    const filePath = '../data.json';
    const contenido = 'Esta es una frase...';
    fs.writeFile(filePath, contenido, err => {
      if (err) {
        console.error('Error', err);
      } else {
        console.log('Fichero guardado correctamente');
      }
    });    
}
module.exports = {movieSource, saveStatus,editMovie};
