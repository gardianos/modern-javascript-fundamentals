/***********************************************************************************************************************
 *                                          Template Literals                                                          *
 * JavaScript now features native templating in the form of template literals, which are a special type of string      *
 * that can contain expressions. We can also use a slightly more advanced template called a tagged template.           *
 * Let’s look at both of these features in this lesson.                                                                *
 * Syntax: ${}                                                                                                         *
 ***********************************************************************************************************************/
(function () {
  "use strict";

  let template = `this is a template literal`;
  let a = "5",
    b = "something";
  //console.log(`a is ${a}, while b is ${b} else, and this ${reverse('thing')} is reversed`);

  function reverse(string) {
    return string.split("").reverse().join("");
  }

  function buildStr(strings, ...values) {
    return (
      strings[3] +
      values[2] +
      strings[2] +
      values[1] +
      strings[1] +
      values[0] +
      strings[0]
    );
  }

  console.log(
    buildStr`a is ${a}, while b is ${b} else, and ${reverse(b)} is reversed`
  );
})();
