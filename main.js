let fruits = ["Äpple", "Orange", "Mandarin", "Persika"];
for (i of fruits) {
  console.log(i);
}
console.log(fruits.length);
for (i in fruits) {
  console.log(fruits[i]);
}

//map metoden används för att använda en egen funktion för varje arrey

let array1 = [1,2,3,4]
array1 = array1.map(x  => x**2)
console.log(array1)

//push metoden används för att adda element element till slut av array

array1.push(5,6,7)
console.log(array1)

//pop metoden används för att radera det senaste element i array

console.log(array1.pop())
console.log(array1)

//shift metoden används för att radera det första element i array

console.log(array1.shift())
console.log(array1)

//unshift metoden används för att adda element eleent till början av array
console.log(array1.unshift(-1,-2))
console.log(array1)

//array1.concat(array2) concat metoden returnerar en ny array som inkluderar aray1 och array2

let array2 = [1,2,3]
array1 = array1.concat(array2)
console.log(array1)

//splice metoden används för att ada element element till array med index position eller radera element med index position

array1.splice(0,0,100,200)
console.log (array1)