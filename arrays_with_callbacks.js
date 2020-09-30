///////////////////////////////////////////
////  Section 3 Array Methods with Callbacks
///////////////////////////////////////////


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


// Every
// Determine if every number is greater than or equal to 0

console.log((nums.every((n) => n >= 0)))

// determine if every word shorter than 8 characters

console.log(panagram.every((s) => s.length < 8))




// Filter
// filter the array for numbers less than 4

let less4 = nums.filter((n) => n < 4);
console.log(less4);

// filter words that have an even length

let evenLength = panagram.filter((s) => s.length % 2 == 0);
console.log(evenLength);


// Find
// Find the first value divisible by 5
console.log(nums.find((n) => n % 5 == 0));

// find the first word that is longer than 5 characters
console.log(panagram.find((s) => s.length % 2 == 0));


// Find Index
// find the index of the first number that is divisible by 3

console.log(nums.findIndex((n) => n % 3 == 0));

// find the index of the first word that is less than 2 characters long

console.log(panagram.findIndex((s) => s.length < 2));



// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach(item => item % 3 == 0 ? console.log(item) : 0);

// console.log each word with an exclamation point at the end of it
panagram.forEach(item => console.log(item + "!"))





// Thought Questions
// 1)any of these methods above does not mutate the orginal of them. 
// 2) return value of forEach method can be push an empty array. So, we can store values from forEach.



// Map
// make a new array of each number multiplied by 100

var mulBy100 = nums.map(item => item * 100)
console.log(mulBy100);

// make a new array of all the words in all uppercase

var upperStr = panagram.map(item => item.toUpperCase())
console.log(upperStr);
// Thought Questions

// What happened to the original array?
// the original array stays the same since map method returns a new array with return values in it.

// What happened to the original array ?
// you do not need to store the values from map method because itself returns an array with return outputs.





// Some 
// Find out if some numbers are divisible by 7
console.log(nums.some((n) => n % 7 == 0));

// Find out if some words have the letter a in them

console.log(panagram.some((s) => s.split("").includes("a")));



// Reduce
// Add all the numbers in the array together using the reduce method

console.log(nums.reduce((acc, cur) => acc + cur))

// concatenate all the words using reduce
console.log(panagram.reduce((acc, cur) => acc + cur))
// Thought Questions
// What happened to the original array?
// the original array remains the same




// Sort
//Try to sort without any arguments, do you get what you'd expect with the numbers array?
//-- without using any argument in sort method, it does not gives the expected return for sorting Numbers of an array.


// Try to sort without any arguments, do you get what you'd expect with the words array?
//-- for strings in an array, sort method does not need any argument


// Sort the numbers in ascending order
console.log(nums.sort((a, b) => a - b))

// Sort the numbers in descending order
console.log(nums.sort((a, b) => a - b).reverse())


// Sort the words in ascending order
console.log(panagram.sort())
// Sort the words in descending order
console.log(panagram.sort().reverse())








// Array Methods Challenge Problems
//Working with data


const products = [
    {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
    },
    {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
    },
    {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
    },
    {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
    },
    {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
    },
    {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
    },
    {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
    },
    {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
    },
    {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
    },
    {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
    },
    {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
    },
    {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
    },
    {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
    },
    {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
    },
    {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
    },
    {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
    },
    {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
    },
    {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
    },
    {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
    },
]

// filter for products with a price that is less than 10, using the array below
let priceLess10 = products.filter((item => item.price < 10))
console.log(priceLess10)


// sort alphabetically by product name
let sortedByName = products.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; };
    return 0;
})


console.log("sortedByName", sortedByName)