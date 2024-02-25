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
const window = {key:'value'}

const userDetail = {
	firstName: 'gaurav',
	lastName: 'sharma',
	// fullName: function () {
	// 	console.log('this', userDetail);
	// 	return userDetail.firstName + ' ' + userDetail.lastName;
	// },

	fullName: () => {
		console.log('this', this);
		return userDetail.firstName + ' ' + userDetail.lastName;
	},
};

console.log(userDetail.fullName());
