(function () {
  "use strict";

  let switcher = "five"; // 'two' testing with two block
  switch (switcher) {
    case "one":
      console.log("the value was one");
      break;
    case "two":
      console.log("the value was two");
      //break; testing if break is not
      break;
    case "three":
      console.log("the value is three");
      break;
    default:
      console.log("nothing else matched");
  }
})();
