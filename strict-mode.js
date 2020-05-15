/*****************************************************************************************************************
 *                                          Strict Mode                                                          *
 * Strict mode is a useful execution mode for JavaScript that can prevent many errors and should always be used. *
 * In this lesson we’ll learn all about it.                                                                      *
 * Syntax: use strict                                                                                            *
 *****************************************************************************************************************/
(function () {
  //'use strict';

  NaN = "oops";
  console.log(NaN);
})();
