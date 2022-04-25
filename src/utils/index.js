const movieArr = [];

class Movie {
    constructor(title, actor, genre, year) {
        this.title = title;
        this.actor = actor;
        this.genre = genre;
        this.year = year;
    }

    add() {
        movieArr.push(this);
    }
};

module.exports = {Movie, movieArr}