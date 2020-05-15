/*****************************************************************************************************************
 *                                            Conditionals                                                       *
 *What happens when we need to do one thing if a condition is true, or something else if it isn’t? We use an if  *
 * statement, that’s what, and in this lesson we’ll learn all about if statements and the ternary operator.      *
 * Syntax: if, else, () ? :                                                                                      *
 *****************************************************************************************************************/
(function () {
  "use strict";

  if (1 + 1 === 3) {
    console.log("the condition is true");
  }

  if (true === false) {
    console.log("this will not be logged");
  } else {
    console.log("this will be logged");
  }

  let color = "red";
  if (color === "blue") {
    console.log("blue");
  } else if (color === "green") {
    console.log("green");
  } else {
    console.log(color);
  }

  if (1) {
    console.log("truthy!");
  }

  let arr = [];
  if (arr.length) {
    console.log("arrays has length");
  }
  true ? console.log("true") : console.log("false"); // output true
  false ? console.log("log for truthy") : console.log("log for falsey"); //output log for falsey
})();
