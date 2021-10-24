// let numberOfFilms;


// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b !=null && a !='' && b !='' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--; 
//         }
//     }
// }
// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Error');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <=3; i++) { 
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();


// "use strict";

// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, hours, callback) {
//     console.log(`Я учу: ${lang}`);
//     console.log(`Я сижу: ${hours}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');

// }

// learnJS('Javascript', '15 hours', done);


"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("test");
    }
};

options.makeTest();

const {border, bg} = options.color;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);
