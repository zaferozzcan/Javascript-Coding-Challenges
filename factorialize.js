
var factor = 1;
function factorialize(num) {
    while (num > 0) {
        factor *= num;
        num--;
    }
    return factor;
}

console.log(factorialize(5));