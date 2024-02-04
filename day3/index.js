// function fun_name(arg1, arg2, arg_n) {
//   console.log("arg1", arg1);
//   console.log("arg2", arg2);
//   console.log("arg_n", arg_n);
// }

// let param1 = 1,
//   param2 = true,
//   param_n = { name: "frank" };

// fun_name(param1, param2, param_n);

function admission(stu_name, stu_advance, course_name, query) {
  const mandatory_adv = { for_admission: 1000, for_registration: 500 };

  if (query) {
    console.log(
      "for admission you have to pay " + mandatory_adv.for_admission + "Rs."
    );
    console.log(
      "for registration you have to pay " +
        mandatory_adv.for_registration +
        "Rs."
    );
  } else {
    if (mandatory_adv.for_admission <= stu_advance) {
      console.info("admission is possible");
    } else if (mandatory_adv.for_registration <= stu_advance) {
      console.info("registration is possible");
      console.info(
        `pay ${
          mandatory_adv.for_admission - stu_advance
        }Rs. to complete admission!!`
      );
    } else {
      console.info(
        `pay atlest ${
          mandatory_adv.for_registration - stu_advance
        } to complete registration!!`
      );
      console.info(
        `pay atlest ${
          mandatory_adv.for_admission - stu_advance
        } to complete admission!!`
      );
    }
  }
}

let stu_name = "vishnu",
  stu_advance = 433,
  course_name = "javascript",
  query = false;

admission(stu_name, stu_advance, course_name, query);
