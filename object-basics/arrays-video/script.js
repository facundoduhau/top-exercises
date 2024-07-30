let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]

let disorderedArr = [
  5, 6, 7, 4, 2, 8, 9, 10, 1, 3,
]

let odds = array.filter(array => // Devuelve un array reducido; Busca coincidencias. 
{
  if(array % 2 != 0)
  {
    return true;
  }
});

let double = array.map(array => // Devuelve totalidad del array, pero trabajado.
{
    return array * 2;
});

let orderedArr = disorderedArr.sort(function(a,b) // Devuelve el array, pero ordenado segun preferencia.
{
  if (a > b)
    { 
      return 1;
    }
    else
    {
      return -1;
    }
});

let total = array.reduce((a, b) => { // Trabaja el array para transformarlo en un numero nuevo, no devuelve array.
  return a + b;
}, 0);

let fiveIsPart = array.some(function(array) // Si existe un elemento que cumple el criterio, devuelve true.
{
  if (array == 5)
  {
    return true;
  }
});

let allFives = array.every(function(array) // Si todos los elementos de un array cumplen el criterio, devuelve true.
{
  if (array == 5)
  {
    return true;
  }
});

let searchThree = array.find(array => array == 3); // Searches for a value in an array.

let indexFour = array.findIndex(array => array == 4); // Searches for the index of the value that matches the criteria.

let recortado = array.splice(5, 1); // Recorta el item en el index "5", 1 vez. OJO!, edita el array original.

console.log("Odd numbers = ", odds);
console.log("Doubled array = ", double);
console.log("Ordered array = ", orderedArr);
console.log("Total array = ", total);
console.log("Is 5 part of the array?: ", fiveIsPart);
console.log("Is every number in the array 5?: ", allFives);
console.log("Found 3 = ", searchThree);
console.log("The index of number 4 is: ", indexFour);
console.log("Array recortado = ", array, "Número que se recortó = ", recortado);
