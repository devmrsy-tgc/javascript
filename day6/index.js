// try{
//     // let lastName = 'lastName';
//     // console.log(userDetail.firstName) // key hard coded
//     // console.log(userDetail[lastName])  // key dynamic
// } catch(error){
//     console.log(error.message)
// }

// const userDetail = { firstName: 'raul', lastName: 'yadav', key: 'dummy value' };

// function getValueByDotNotation(key) {
// 	return userDetail.key;
// }

// function getValueBySquareBracket(key) {
// 	return userDetail['firstName'];
// }

// const result1 = getValueByDotNotation("firstName");
// const result2 = getValueBySquareBracket("firstName");

// console.log('result1', result1);
// console.log('result2', result2);
// const window = { key: 'value' };

// const userDetail = {
// 	firstName: 'gaurav',
// 	lastName: 'sharma',
	// fullName: function () {
	// 	console.log('this', userDetail);
	// 	return userDetail.firstName + ' ' + userDetail.lastName;
	// },

// 	fullName: () => {
// 		console.log('this', this);
// 		return userDetail.firstName + ' ' + userDetail.lastName;
// 	},
// };

// console.log(userDetail.fullName());

// ---------------------- all about doubt -----------------------------------

// 27-feb-2024 – (Gaurav Sharma)
// When passing number as arguments in function, It is treating as a string eg is below
// function Rest_opt(...rest)
// {
//     return rest + rest;
// }

// var res = Rest_opt(23, 23, 32, 89, 89, 89);
// console.log(res);

// Result : 23, 23, 32, 89, 89, 8923, 23, 32, 89, 89, 89

function Rest_opt(...rest) { // rest = [2, 3, 12, 5]
	let result = 0;

	for(let index=0; index<rest.length; index++) {
		result += rest[index];
	}

	return result
}

var res = Rest_opt(4,3,1,6);
console.log("result", res)

// // Result: 23, 23, 32, 89, 89, 8923, 23, 32, 89, 89, 89;

// let arr = [1,2,323,223,2]

// arr[1]

