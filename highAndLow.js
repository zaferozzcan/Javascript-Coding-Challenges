// In this challenge,  given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
    var stringArray = numbers.split(" ");
    var stringArrayToNum = [];
    for (n of stringArray) stringArray.push(Number(n))
    return `${Math.max(...stringArrayToNum)} ${Math.min(...stringArrayToNum)}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));