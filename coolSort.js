const bondFilms = [
    { "title": "Skyfall", "year": 2012, "actor": "Daniel Craig", "gross": "$1,108,561,008" },
    { "title": "Thunderball", "year": 1965, "actor": "Sean Connery", "gross": "$1,014,941,117" },
    { "title": "Goldfinger", "year": 1964, "actor": "Sean Connery", "gross": "$912,257,512" },
    { "title": "Live and Let Die", "year": 1973, "actor": "Roger Moore", "gross": "$825,110,761" },
    { "title": "You Only Live Twice", "year": 1967, "actor": "Sean Connery", "gross": "$756,544,419" },
    { "title": "The Spy Who Loved Me", "year": 1977, "actor": "Roger Moore", "gross": "$692,713,752" },
    { "title": "Casino Royale", "year": 2006, "actor": "Daniel Craig", "gross": "$669,789,482" },
    { "title": "Moonraker", "year": 1979, "actor": "Roger Moore", "gross": "$655,872,400" },
    { "title": "Diamonds Are Forever", "year": 1971, "actor": "Sean Connery", "gross": "$648,514,469" },
    { "title": "Quantum of Solace", "year": 2008, "actor": "Daniel Craig", "gross": "$622,246,378" },
    { "title": "From Russia with Love", "year": 1963, "actor": "Sean Connery", "gross": "$576,277,964" },
    { "title": "Die Another Day", "year": 2002, "actor": "Pierce Brosnan", "gross": "$543,639,638" },
    { "title": "Goldeneye", "year": 1995, "actor": "Pierce Brosnan", "gross": "$529,548,711" },
    { "title": "On Her Majesty's Secret Service", "year": 1969, "actor": "George Lazenby", "gross": "$505,899,782" },
    { "title": "The World is Not Enough", "year": 1999, "actor": "Pierce Brosnan", "gross": "$491,617,153" },
    { "title": "For Your Eyes Only", "year": 1981, "actor": "Roger Moore", "gross": "$486,468,881" },
    { "title": "Tomorrow Never Dies", "year": 1997, "actor": "Pierce Brosnan", "gross": "$478,946,402" },
    { "title": "The Man with the Golden Gun", "year": 1974, "actor": "Roger Moore", "gross": "$448,249,281" },
    { "title": "Dr. No", "year": 1962, "actor": "Sean Connery", "gross": "$440,759,072" },
    { "title": "Octopussy", "year": 1983, "actor": "Roger Moore", "gross": "$426,244,352" },
    { "title": "The Living Daylights", "year": 1987, "actor": "Timothy Dalton", "gross": "$381,088,866" },
    { "title": "A View to a Kill", "year": 1985, "actor": "Roger Moore", "gross": "$321,172,633" },
    { "title": "License to Kill", "year": 1989, "actor": "Timothy Dalton", "gross": "$285,157,191" }
];




// TASKS

// ========================================== 
// BOND: TITLES
// ========================================== 
// initialize an empty array to store the titles in
const bondTitles = [];
// loop through the bondFilms array
// -- note: if you know that you want to just loop through an entire array and dont want to use the index numbers, a for ... of is a nice option use over a regular loop
for (let film of bondFilms) {
    // push all the titles into the bondTitles array
    bondTitles.push(film.title);
}
// console log the bondTitles array
console.log(bondTitles);

// ========================================== 
// BOND: ODD YEAR
// ========================================== 
// initialize an empty array to store the odd year films in
const oddBonds = [];
// loop through the bondFilms array
for (let film of bondFilms) {
    // check if the year is odd or not
    if (film.year % 2 !== 0) {
        // if it is odd, push that film into the odd year array
        oddBonds.push(film)
    }
}
// console log the odd year array
console.log(oddBonds);

// ========================================== 
// BOND: GROSS
// ========================================== 
// SIMPLE PSEUDOCODE:
// put all the gross numbers into an array
// loop through that array
// sum all the numbers in that array

// initialize an empty array to hold all gross values
const grossArr = [];
// loop through the bondFilms array
for (let film of bondFilms) {
    // overall: convert the gross string into a number
    // in order to do so, we need to ..
    // remove the dollar sign using the replace method
    let removedDollar = film.gross.replace('$', '');
    // remove all the commas using the replace method - note that the 'g' is required in order to remove ALL commas, if you don't put it, it only removes the first one. wondering what g stands for? it means global, so it'll replace all instances of whatever you're searching for, in this case a comma.
    let removedCommas = removedDollar.replace(/,/g, '');
    // convert the string into a number using the parseInt method or Number method
    let convertedNum = Number(removedCommas);
    // push that converted number into our gross values array
    grossArr.push(convertedNum);

    // EXTRA NOTE: does the above look a little too long and verbose? you can chain it to condense it into one line! like so
    // grossArr.push(parseInt(film.gross.replace('$', '').replace(/,/g, '')));

}
// initialize a totalGross variable as 0 to add onto
let totalGross = 0;
// loop through the gross values array
for (let value of grossArr) {
    // sum all the numbers of the array by adding it onto the totalGross
    totalGross = totalGross + value;
}
// log the totalGross
console.log(totalGross);

// Hungry for More?
// 1. console.log the single movie object that contains the actor who starred in the least number of films

// Create object that holds key/value pairs of Bond actors
let bondActors = {}
// for loop that goes through the array of Bond films
for (let film of bondFilms) {
    // for loop that goes through each object and pushes objects consisting of key/value pairs of actors and number of films
    for (let key in film) {
        if (key === "actor") {
            // if the property exists add one to the value
            if (bondActors.hasOwnProperty(film[key])) {
                bondActors[film[key]] += 1
                // if the property doesn't exists add the property with a value of one
            } else {
                bondActors[film[key]] = 1
            }
        }
    }
}

// sort the bondActors object by number of movies each actor has appeared in
let sortedActors = Object.keys(bondActors).sort(function (a, b) {
    return bondActors[a] - bondActors[b]
})

// loop through the Bond films and console.log George Lazenby's only appearance 
for (let film of bondFilms) {
    if (film.actor === sortedActors[0]) {
        console.log(film)
    }
}
