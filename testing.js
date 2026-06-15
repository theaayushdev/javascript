const numbers = [1, 2, 3, 4, 5];
const numbers1 = [5,6,7,89,9];

const [initial, ...final] = numbers;
const [initial1, ...final1] = numbers1;

console.log(numbers,numbers1)

console.log(final.map( x => x *2))

