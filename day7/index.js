// increment decrement
// post , pre

// let index=0

// for (index; index < 4; ++index) {
// 	console.log('before continue', index); // 0,1,2
// 	if (index != 2) continue;
// 	console.log('after continue', index); // 2
// }

// {
// 	let index = 0;

// 	console.log('before continue', index); // 0
// 	if (index != 2) {
// 		console.log('after continue', index); // 0
// 	}
// }

// {
// 	let index = 1;

// 	console.log('before continue', index); // 1
// 	if (index != 2) {
// 		console.log('after continue', index); // 1
// 	}
// }

// {
// 	let index = 2;

// 	console.log('before continue', index); // 2
// 	if (index != 2) { // false
// 		console.log('after continue', index); // 2
// 	}
// }

// {
// 	let index = 3;

// 	console.log('before continue', index); // 3
// 	if (index != 2) {
// 		console.log('after continue', index); 3
// 	}
// }

const employeesData = [
	{
		id: 12,
		name: 'himanshi',
		age: 25,
		city: 'New York',
		occupation: 'Engineer',
	},
	{
		id: 13,
		name: 'John',
		age: 30,
		city: 'Los Angeles',
		occupation: 'Designer',
	},
	{
		id: 14,
		name: 'Emily',
		age: 28,
		city: 'Chicago',
		occupation: 'Teacher',
	},
	{
		id: 15,
		name: 'Michael',
		age: 35,
		city: 'San Francisco',
		occupation: 'Developer',
	},
	{
		id: 16,
		name: 'Sophia',
		age: 27,
		city: 'Miami',
		occupation: 'Artist',
	},
];
let result = {};

for (let index = 0; index < employeesData.length; index++) {
	if (employeesData[index].id == 14) {
		result = employeesData[index];
        break;
	}

	// console.table([employeesData[index]]);
	console.log("------------inside loop----------");
}

console.log("------------result----------");
console.table(employeesData);
