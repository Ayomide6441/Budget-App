// ("use strict");
let transaction = [20, 45, 60, 400, 700, -500, -250];

// FUNCTIONS
// ------ INCOME FUNCTION ----------
function income() {
  //   write your income function here
  console.log(`The total income is $${income}.`);
}

// ------ EXPENSE FUNCTION ----------
function expense() {
  //   write your expense function here
  const totalExp = `$${Math.abs(expense)}`;
  console.log(`The total expense is ${totalExp}.`);
}

// ------ TOTAL FUNCTION ----------
function total() {
  //   write your total function here
  const totalAmt = total < 0 ? `-$${Math.abs(total)}` : `$${Math.abs(total)}`;
  console.log(`The total amount is ${totalAmt}.`);
}

expense();
income();
total();
