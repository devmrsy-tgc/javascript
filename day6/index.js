// let num = 10;

// // Type conversion
// console.log(typeof num.toString())

// let numAsString = '100';

// // Type conversion
// console.log(typeof numAsString)

// console.log(typeof parseInt(numAsString));

// console.log(typeof parseFloat(numAsString), numAsString);

// array

// const cars = ["Saab", "Volvo", "BMW"];

// console.log(cars[-1])

// const cars = new Array('Saab', 'Volvo', 'BMW', 3453, null, () => {});

// cars[1] = "Hundai";

// // console.log(cars.splice(3, 10));

// console.log(cars.toString());

// const obj = ['value',34,3,434,234,35,'a'];
// // {0:value}

// console.log(obj.length);
// {
// 	0: value1,
// 	1: value2,
// 	2: value3
// }

// const numsArr = [3, 1, 3, 4, 87, 545, 45, 45];

// numsArr.sort((a, b) => b - a);

// console.log(numsArr)

// const obj = ['r', 'e', 'z'];

// obj.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

// console.log(obj);

// const obj = ['r', 'e', 'z', 'E'];

// obj.sort((a, b) => {
// 	console.log(a, b);
// 	return a.charCodeAt(0) - b.charCodeAt(0);
// });

// console.log(obj);

const obj = ['r', 'e', 'z', 'E'];

let length = obj.length;

obj[length] = 'new key'

console.log(obj,length)


