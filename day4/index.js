// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.MAX_SAFE_INTEGER)

// let number_of_student = null;

// console.log(number_of_student);

// let student_fee = null;

// function admission(param1) {
//     if(param1 === null) {
//         console.log('please pay fee')
//     } else {
//         console.log('receipt send')
//     }
// }

// admission(student_fee)

// function

function sum(...rest) { // rest operator
    let result = 0;
    rest.forEach(element => {
        result = result + element;
    });
    return result
}

let result = sum(1,2,3,4)

console.log(result)



