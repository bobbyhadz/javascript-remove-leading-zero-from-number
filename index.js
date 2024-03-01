// EXAMPLE 1 - Remove the leading Zeros from a String in JavaScript

const num = '00123';

const withoutLeading0 = parseInt(num, 10);
console.log(withoutLeading0); // 👉️ 123

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove the leading Zeros from a String using parseFloat()

// const num = '00012.34';

// const result = parseFloat(num);

// console.log(result); // 👉️ 12.34

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove the leading Zeros from a String using replace()

// const num = '00012.34';

// const result = num.replace(/^0+/, '');

// console.log(result); // 👉️ 12.34

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove the leading Zeros from a Number using the Number() constructor

// const str = '0001234';

// const result = Number(str);
// console.log(result); // 👉️ 1234

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove the leading zeros from a Number by multiplying by 1

// const str = '0001234';

// const result = str * 1;
// console.log(result); // 👉️ 1234

// ------------------------------------------------------------------

// // EXAMPLE 6 - Remove the leading Zeros from a Number using the unary plus (+)

// const num = '00123';

// const withoutLeading0 = +num;
// console.log(withoutLeading0); // 👉️ 123
