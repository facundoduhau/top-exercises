let myArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]

let noSort = [
  5, 4, 6, 3, 7, 2, 8, 1, 10, 9,
]

myArr.push(15);
console.log("Array con Push: ", myArr); // Agrega item al final del array.

myArr.pop();
console.log("Array con Pop: ", myArr); // Saca el ultimo item del array.

myArr.shift();
console.log("Array con Shift: ", myArr); // Saca el primer item del array.

myArr.unshift(1);
console.log("Array con Unshift: ", myArr); // Agrega item al principio del array.
