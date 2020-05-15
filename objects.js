/*****************************************************************************************************************
 *                                          Objects                                                              *
 * Objects are a fundamental concept in JavaScript, and ultimately, most entities are objects in one way or      *
 * another. In this lesson we’ll focus on how objects can be created, and the different ways that their          *
 * properties can be accessed.                                                                                   *
 * Syntax: Object, {}                                                                                            *
 *****************************************************************************************************************/
(function () {
  "use strict";

  let myObject = {
    property1: "hello",
    property2: true,
  };
  let obj = new Object();

  myObject.property2; // true
  myObject["property2"]; // true

  myObject.property3 = false;
  myObject["property4"] = "something";

  function getThingByColor(color) {
    let things = {
      red: "a red thing",
      green: "a green thing",
      blue: "a blue thing",
    };

    return things[color] || "Sorry, no thing of that color exists";
  }
  console.log(getThingByColor("red")); // a red thing
  console.log(getThingByColor("purple")); // Sorry, no thing of that color exists
})();
