// Exercise 8.

// const add = function(a, b) {
// 	return a + b;
// };
// 
// const subtract = function(a, b) {
// 	return a - b;
// };
// 
// const sum = function(array) {
//   return array.reduce((total, current) => 
//   total + current, 0)
// };
// 
// const multiply = function(array) {
//   return array.reduce((total, current) =>
//   total * current)
// };
// 
// const power = function(a, b) {
// 	return Math.pow(a, b)
// };
// 
// const factorial = function(num) {
// 	let suma = 1;
//   for (let i = num; i > 0; i--)
//   {
//     suma *= i;
//   }
// };

// Exercise 9.

// const palindromes = function (inputString) {
//   let reversed = inputString.toLowerCase().split('').reverse().join('');
//   
//   return reversed === inputString;
// };

// Exercise 10.

// const fibonacci = function(num)
//   {
//     if (num <= 1)
//       {
//         return num;
//       }
//     else
//       {
//         return fibonacci(num-1)+fibonacci(num-2);
//       }
//   }
// 
// console.log(fibonacci(6));

// Exercise 11.

// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]
// 
// const booksArray = function(books)
//   {
//     return books.map(book => book.title);
//   }
// console.log(booksArray(books));

// Exercise 12.

// const people = [
//   {
//     name: 'Facundo',
//     birth: 1992,
//     death: 2024,
//   },
//   {
//     name: 'Maria',
//     birth: 1967,
//     death: 2024,
//   },
//   {
//     name: 'Julian',
//     birth: 1924,
//     death: 2024,
//   },
//   {
//     name: 'Sarmiento',
//     birth: 1935,
//     death: 2024,
//   },
//   {
//     name: 'Cabral',
//     birth: 2000,
//     death: 2024,
//   },
//   {
//     name: 'Candelaria',
//     birth: 1949,
//     death: 2024,
//   },
// ]
// 
// function oldestDeath(array)
//   {
//     let oldest = array[0];
//     for (let i = 0; i < array.length; i++)
//     {
//       let current = array[i];
//       var oldestLived = oldest.death - oldest.birth;
//       var currentLived = current.death - current.birth;
//       if(currentLived > oldestLived)
//       {
//         oldest = current;
//       }
//     }
//     return oldest.name;
//   }
// 
// console.log(oldestDeath(people));
