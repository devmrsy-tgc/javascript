// function admission(
//   stu_name,
//   stu_advance,
//   course_name,
//   query,
//   age,
//   contact_number,
//   address = {}
// ) {
//   const required_adv_amount = { for_admission: 1000, for_registration: 500 };
//   let admission_amount = required_adv_amount.for_admission;
//   let registration_amount = required_adv_amount.for_registration;

//   if (query) {
//     console.log(`For admission, you have to pay ${admission_amount} Rs.`);
//     console.log(`For registration, you have to pay minimum ${registration_amount} Rs.`);
//   } else {
//     if (admission_amount <= stu_advance) {
//       console.log("Admission is possible.");
//       console.log("Registration is possible.");
//     } else {
//       console.log(`Pay at least ${admission_amount - stu_advance} Rs. to complete admission.`);
//       console.log(`Pay at least ${registration_amount - stu_advance} Rs. to get registration done.`);
//     }
//   }
// }

// let stu_name = "vishnu",
//   stu_advance = 433,
//   course_name = "javascript",
//   query = false,
//   age = 18,
//   contact_number = 8765456987,
//   address = {};

// admission(stu_name, stu_advance, course_name, query, age, contact_number, address);

let decsion = 1;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = "";


rl.question("What is your name\n", function (string) {
  userInput = string;

  console.log("Your name is " + userInput);

  rl.close();

  // This will be executed after the user provides input
  console.log("hello");
});
