function idExists(array, id) {

    array.find( movie => { 
        if (movie.id == id) {
            return true;
        }
    });

    return false;
}

module.exports = idExists;