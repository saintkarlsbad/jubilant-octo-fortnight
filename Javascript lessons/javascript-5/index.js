let movies = require('./data');
let _ = require('underscore');

// let moviesByRating = _.groupBy(movies, 'contentRating');

let moviesByDecade = _.groupBy(movies, (movie) => Math.floor(movie.year/10*10))

// let PGMovies = _.where(moves, {contentRating: 'PG'})
// let PGMovies2 = _.filter(movies, (elem) => elem.contentRating ==='PG' && elem,)


// let brackFriends = ['Jeremy', 'Joe', 'Mark'];
// let stephanFriends = ['Mason', 'Jeremy', 'Lloyd'];

// let allFriends = _.union(brackFriends, stephanFriends);
// let sharedFriends = _.intersection(brackFriends, stephanFriends);

// let ary = [1,2,3,4,5,6,7,8,9,10];
// let unique = _.union(ary);

// let max = _.max(ary);

function longSum(n) {
    let myTotal = 0;
    for (var i=0; i<n; i++) {
        myTotal += i;
    }
    return muTotal;
}

let memoizedFunction = _.memoize(longSum);

console.log('timer');
let mySum = memoizedFunction(100000000)
console.timeEnd('timer');

// console.log(_.sample(movies, 3))

// _.forEach(myObj, (elem) => console.log(elem));

