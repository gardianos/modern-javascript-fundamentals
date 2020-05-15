/*****************************************************************************************************************
 *                                   Operator Precedence                                                         *
 * Not all operators are created equal! In this lesson we'll see the order in which operators are evaluated when *
 * more than one type of operator is used in an expression.                                                      *
 * Syntax:                                                                                                       *
 *****************************************************************************************************************/
"use strict";

let precedence = 1 + 4 * 2; // 9
let precedence2 = (1 + 4) * 2; // 10
let precedence3 = 2 + 10 - 2; //10
let precedence4 = 2 - 10 + 2; // -6
