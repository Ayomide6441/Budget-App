# Budget App

## Introduction

In your web foundation class you have been taught array methods. In this project you will practice the `map`, `filter` and `reduce` array methods.

This project has a starter file that contains the HTMl, CSS and JS for the task.

# Your Task

To get started open the starter file. In the `script.js` file there is an array of transaction `(let transaction = [20, 45, 60, 400, 700, -500, -250];)` . The positive number represents income while the negative represents expense. You are going to use this array to perform some operations

## Part 1

You are required to calculate the total amount of money in the transaction array, the income and the expense.The functions have been created for you but you still need to add the code to do the calculation.To calculate this you should use `map,filter` or `reduce` array methods only. To make this possible follow the steps below

- `Income function` :

  - create a variable named `income`
  - the value of the variable should be a function that calculates the total income from the transaction array. Example:

        const income = example
        .filter((amt) => amt < 0)
        .reduce(function (acc, amt, i) {
            return acc * amt;
        }, 0);

  - Remember that the positive numbers in the transaction array represent income

- `Expense function` :

  - create a variable named `expense`
  - the value of the variable should be a function that calculates the total expense from the transaction array.

  - Remember that the negative numbers in the transaction array represent expense

- `Total function` :

  - create a variable named `total`
  - the value of the variable should be a function that calculates the total amount in the transaction array.

## Part 2

The functions in part 1 have been called for your already. Now you should go to the console and make sure your output are as follows:

- The total expense is $750
- The total income is $1225
- The total amount is $475

**If you get stuck while trying to solve this problem, search for possible solutions online. If you still can't solve the problem then you should check the final folder**
