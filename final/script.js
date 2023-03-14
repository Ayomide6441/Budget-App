// ("use strict");
let transaction = [20, 45, 60, 400, 700, -500, -250];

// FUNCTIONS
// ------ INCOME FUNCTION ----------
function income() {
  const income = transaction
    .filter((amt) => amt > 0)
    .reduce(function (acc, amt, i) {
      return acc + amt;
    }, 0);
  console.log(`The total income is $${income}.`);
}

// ------ EXPENSE FUNCTION ----------
function expense() {
  const expense = transaction
    .filter((amt) => amt < 0)
    .reduce(function (acc, amt, i) {
      return acc + amt;
    }, 0);
  const totalExp = `$${Math.abs(expense)}`;
  console.log(`The total expense is ${totalExp}.`);
}

// ------ TOTAL FUNCTION ----------
function total() {
  const total = transaction.reduce(function (acc, amt, i) {
    return acc + amt;
  }, 0);
  const totalAmt = total < 0 ? `-$${Math.abs(total)}` : `$${Math.abs(total)}`;
  console.log(`The total amount is ${totalAmt}.`);
}

expense();
income();
total();
