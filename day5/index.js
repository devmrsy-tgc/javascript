// 3.1) function
// es5 -> function fun_name() { }
// es6 -> let fun_name = () => {}

// es5
// function credit(num1, num2) {
//     let result = num1 + num2;
//     return result
// }

// // function calling function name + ()
// let arg1 = 4,
// 	arg2 = 6;

// credit(arg1, arg2);

// console.log("res",res)

let userIsvalid = false;

function sum(num1, num2) {
	if (userIsvalid) {
		return num1 + num2;
	} else {
		return 'user is not valid';
	}
}

const result = sum(5, 7);

console.log(result);

function superCheck() {}

let interest = 10;

superCheck(result, interest);
