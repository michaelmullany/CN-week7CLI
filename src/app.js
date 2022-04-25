const yargs = require("yargs");
const { Movie, movieArr } = require("./utils");

yargs.options({
    title: {type: 'array'},
    actor: {type: 'array'},
    genre: {type: 'array'},
    year: {type: 'array'}
});

// Standard
// console.log(process.argv)
// Yargs - Logs an object
// console.log(yargs.argv);

const app = (yargsObj) => {
    if (yargsObj.add) {
        console.log(yargsObj);
        for (let i = 0; i < 4; i++) {
            const movie = new Movie(
                yargsObj.title[i],
                yargsObj.actor[i],
                yargsObj.genre[i],
                yargsObj.year[i]
            );
            movie.add();
        }
    } else {
        console.log("Incorrect Command");
    }
};

app(yargs.argv);
console.log(movieArr);