// ("use strict");
let transaction = [20, 45, 60, 400, 700, -500, -250];

// functions
function calcBalance() {
  const total = transaction.reduce(function (acc, amt, i) {
    return acc + amt;
  }, 0);
  const totalAmt = total < 0 ? `-$${Math.abs(total)}` : `$${Math.abs(total)}`;

  const expense = transaction
    .filter((amt) => amt < 0)
    .reduce(function (acc, amt, i) {
      return acc + amt;
    }, 0);
  const totalExp = `$${Math.abs(expense)}`;

  const income = transaction
    .filter((amt) => amt > 0)
    .reduce(function (acc, amt, i) {
      return acc + amt;
    }, 0);
  const totalInc = `$${income}`;
  console.log(`The total amount is ${totalAmt}.`);
  console.log(`The total expense is ${totalExp}.`);
  console.log(`The total income is ${totalInc}.`);
}
calcBalance()