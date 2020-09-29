function reverseString(str) {
    var revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString += str[i]
    }
    console.log(revString);
}


console.log(reverseString("hello"));



// complete challenge with some built-in methods

function reversedString(str) {
    // we can take advantage of .reverse() method.Said that, this medhod only works 
    // with array so turn the string into an array.
    var strArr = str.split("");
    // reverse the array
    var reversedArr = strArr.reverse();
    // concat the items of array
    var concatReverseArr = reversedArr.join("")

    return concatReverseArr
}


console.log(reversedString("hello"));



// return it in one line of code 

function reverser(str) {

    return str.split("").reverse().join("");
}

console.log(reverser("hello"));




// reverse integer
function revInt(num) {
  return num.toString().split("").reverse().join("");
};


console.log(Number(revInt(12345)));
