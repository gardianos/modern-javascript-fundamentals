﻿/*****************************************************************************************************************
 *                            Unary, Logical, Comma, and Spread Operators                                        *
 * In this lesson we’ll continue looking at JavaScript’s many operators. This time we’ll focus on unary          *
 * operators, logical operators, the comma operator, and the spread operator.                                    *
 * Syntax: delete, typeof, void, &&, ||, !, , ,  ...                                                             *
 *****************************************************************************************************************/
"use strict";

let test = {
  x: "x",
};
delete test.x;
console.log(test.x);

let word = "hello";
console.log(typeof word);

let arr = [];
console.log(typeof arr);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false

let x = "hello",
  y = "world";
let obj = { x: "x", y: "y" };

//...something;
