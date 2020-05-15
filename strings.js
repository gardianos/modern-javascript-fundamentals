/*****************************************************************************************************************
 *                                          Working With Strings                                                 *
 * Strings have lots of different properties and methods we can use in order to transform them or glean          *
 * useful information from them. Let’s see some of the more common things we can do with strings.                *
 * Syntax: length, split, indexOf, lasIndexOf, toUpperCase, substring, slice, trim                               *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let testString = "this is a test string"; //include spaces char 21
  console.log(testString.length);

  let strArr = testString.split(" ");
  console.log(strArr); //5 words separetes with spaces not include in array

  console.log(testString.indexOf("is")); // start with 0 result 2
  console.log(testString.lastIndexOf("is")); // result is 5

  console.log(testString.toUpperCase());

  console.log(testString.substring(8)); // result is "a test string"
  console.log(testString.substring(8, 9)); // start in 8 and end in 9 char | result is "a"

  console.log(testString.slice(-6)); // in this method we can used - sign | different between substring and slice is in slice we can use 0 sign

  console.log("       test      ".trim());
})();
