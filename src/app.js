const yargs = require("yargs");
const { Movie, movieArr } = require("./utils");

// Standard
// console.log(process.argv)
// Yargs - Logs an object
// console.log(yargs.argv);

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movieArr);
    } else {
        console.log("Incorrect Command");
    }
};

app(yargs.argv);