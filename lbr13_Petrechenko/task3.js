
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log("Сума чисел:", sum);