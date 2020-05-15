/***********************************************************************************************************************
 *                                        WORKING WITH NUMBERS                                                         *
 * In this lesson we’ll take a look at some of the properties and methods that make up the API of the built-in Number  *
 * object.                                                                                                             *
 * Syntax: isNaN, parseFloat, parseInt, toFixed, toExponential, toPrecision, toString                                  *
 ***********************************************************************************************************************/
(function () {
  "use strict";

  console.log(Number.isNaN(5 * "oops")); // result true  -----// NaN - not equal to anything is type of number

  let floatString = "hey1.5oops";
  let intString = "3hey";
  console.log(typeof Number.parseFloat(floatString));
  console.log(typeof Number.parseInt(intString));

  let num = 5.4567;
  console.log(num.toFixed(2));
  console.log(num.toExponential());
  console.log(num.toLocaleString());
  console.log(num.toPrecision(2));
  console.log(num.toString());
})();
