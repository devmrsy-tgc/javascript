// filter 0, 1, 1+

const employeesData = [
	{
		id: 112,
		name: 'kundan',
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
		id: 12,
		name: 'Kundan',
		age: 15,
		city: 'New York',
		occupation: 'Engineer',
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
		age: 14,
		city: 'Miami',
		occupation: 'Artist',
	},
];

let result = []

for (let index = 0; index < employeesData.length; index++) {

	console.log(index < employeesData.length, index ,employeesData.length)
	// if(employeesData[index].name.toLowerCase() == "kundan" && employeesData[index].age <= 18) {
	// 	console.log("result",...result)
	// 	result = [...result, employeesData[index]]
	// }

}

console.log("------------result----------");
console.table(result);



// spread operator

// const arr1 = [9,34,1,2];

// const arr2 = [2,8,6,454,9,7];

// // output: [9,34,1,2,2,8,6,454,9,7]

// console.log(...arr1)
// console.log(...arr2)
// console.log([...arr1,...arr2])


// let arr1 = [9,34,1,2];

// console.log(arr1);

// arr1 = [...arr1, 100]
 
// console.log(arr1) // output [9,34,1,2,100]


// const employeesData = [
// 	{
// 		id: 112,
// 		name: 'himanshi',
// 		age: 18,
// 		city: 'JOrdan',
// 		occupation: 'Engineer',
// 	},
// 	{
// 		id: 13,
// 		name: 'John',
// 		age: 30,
// 		city: 'Los Angeles',
// 		occupation: 'Designer',
// 	},
// 	{
// 		id: 14,
// 		name: 'Emily',
// 		age: 28,
// 		city: 'Chicago',
// 		occupation: 'Teacher',
// 	},
// 	{
// 		id: 12,
// 		name: 'himanshi',
// 		age: 15,
// 		city: 'New York',
// 		occupation: 'Engineer',
// 	},
// 	{
// 		id: 15,
// 		name: 'Michael',
// 		age: 35,
// 		city: 'San Francisco',
// 		occupation: 'Developer',
// 	},
// 	{
// 		id: 16,
// 		name: 'Sophia',
// 		age: 14,
// 		city: 'Miami',
// 		occupation: 'Artist',
// 	},
// ];

// let result = [];

// for(let i=0; i < employeesData.length; i++) {
// 	if(employeesData[i].name === "himanshi" && employeesData[i].age <= 18) {
// 		console.log("result",...result)
// 		result = [...result, employeesData[i]]
// 	}
// }

// console.table(result)


employee management FileSystem.apply. 

{
	name: sooraj,
	age:28,
	desination,
	address: {
		hNO:1444,
		gNO:12,
		pincode:110060
	}
	salary:1200
}

const temp = [
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Engineer",
	  "technology": true
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj@example.com",
	  "department": "Software Development",
	  "joining_date": "2022-05-15"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Manager",
	  "technology": false
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.m@example.com",
	  "department": "Human Resources",
	  "joining_date": "2021-10-20"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Marketing Executive",
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.marketing@example.com",
	  "department": "Marketing",
	  "joining_date": "2023-02-08"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Accountant",
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.acc@example.com",
	  "department": "Finance",
	  "joining_date": "2020-07-10"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Graphic Designer",
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.design@example.com",
	  "department": "Creative",
	  "joining_date": "2024-01-30"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Customer Service Representative",
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.customer@example.com",
	  "department": "Customer Support",
	  "joining_date": "2022-08-14"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Data Analyst",
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.data@example.com",
	  "department": "Analytics",
	  "joining_date": "2023-11-05"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Project Manager",
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.pm@example.com",
	  "department": "Project Management",
	  "joining_date": "2021-03-22"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Sales Representative",
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.sales@example.com",
	  "department": "Sales",
	  "joining_date": "2020-12-18"
	},
	{
	  "name": "sooraj",
	  "age": 28,
	  "designation": "Quality Assurance Analyst",
	  "address": {
		"hNO": 1444,
		"gNO": 12,
		"pincode": 110060
	  },
	  "salary": 1200,
	  "email": "sooraj.qa@example.com",
	  "department": "Quality Assurance",
	  "joining_date": "2022-02-28"
	}
  ]
