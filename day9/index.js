// try {
// 	const newDate = new Date()

// 	const joining_date =  "2020-12-18"

// 	const joining_dateAsArr = joining_date.split('-');

// 	let year,month,date;

// 	year = parseInt(joining_dateAsArr[0])
// 	month = parseInt(joining_dateAsArr[1])
// 	date = parseInt(joining_dateAsArr[2])

// 	console.log(newDate.setFullYear(year, month, date))

// } catch(error) {
// 	console.log(error.message)
// }

// try {
// 	const object = {
// 		key_as_string: 'value', // key should be string, value could be any valid data type in js like (number, string, null, undefined, object, array, Date)
// 		key_as_number: 100, // key should be string, value could be any valid data type in js like (number, string, null, undefined, object, array, Date)
// 		key_as_null: null, // key should be string, value could be any valid data type in js like (number, string, null, undefined, object, array, Date)
// 		key_as_undefined: undefined, // key should be string, value could be any valid data type in js like (number, string, null, undefined, object, array, Date)
// 		key_as_array: [undefined, null, 'ladks', 5454], // key should be string, value could be any valid data type in js like (number, string, null, undefined, object, array, Date)
// 		key_as_object: {
// 			key_as_string: 'value',
// 			key_as_number: 100,
// 			key_as_null: null,
// 			key_as_undefined: undefined,
// 			key_as_array: [undefined, null, 'ladks', 5454],
// 			key_as_object: {key:'some key'},
// 		},
// 	};

// 	console.log(object.key_as_string);
// 	console.log(object.key_as_undefined);
// 	console.log(object.key_as_array);
// 	console.log(object['key_as_object']);

// } catch (error) {
// 	console.log(error.message);
// }

// try {
// 	let temp = 100;

// 	const obj = { key: 28, temp: 'value with temp key', 100: 'value in 100' };

// 	console.log('using square', obj[temp]); // dynamic variable
// 	console.log('using dot notation', obj.temp); // if you want to call statically
// } catch (error) {
// 	console.log(error.message);
// }

// [
// 	1,3,4,5,5
// ];

// const experimental = {0:1, 1:2, 3:4, 2:10}
// console.log(experimental.2)

// let number = 100;

// console.log("experimental",typeof number.toString())

const obj = { name: 'gurav'};

const obj2 = obj;

console.log(obj2)

obj2.name = "sanjog";

console.log(obj)

while(condition) {

}

do {

} while(condition)