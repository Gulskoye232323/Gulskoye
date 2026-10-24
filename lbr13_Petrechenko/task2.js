
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(function(number, index) {
    return number * index;
});

console.log(newNumbers);