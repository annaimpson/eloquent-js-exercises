var _ = require('underscore');

///CHAPTER 2

////////////////////////////////////////////////////////////////////////////////
///Write a loop that makes seven calls to console.log to output the following
///triangle:
////////////////////////////////////////////////////////////////////////////////
var hash = "#";
for (hash; hash.length < 8; hash += "#")
  //console.log(hash);




////////////////////////////////////////////////////////////////////////////////
// Write a program that uses console.log to print all the numbers from 1
// to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
// instead of the number, and for numbers divisible by 5 (and not 3), print
// "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz",
// for numbers that are divisible by both 3 and 5 (and still print "Fizz" or
// "Buzz" for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed
// out a significant percentage of programmer candidates. So if you solved
// it, you’re now allowed to feel good about yourself.)
////////////////////////////////////////////////////////////////////////////////
  for ( var number = 1; number <= 100; number++) {
    var output = "";
    if (number % 3 == 0)
      output += "Fizz";
    if (number % 5 == 0)
      output += "Buzz";
    //console.log(output || number);
  }




////////////////////////////////////////////////////////////////////////////////
// Write a program that creates a string that represents an 8×8 grid, using
// newline characters to separate lines. At each position of the grid there
// is either a space or a “#” character. The characters should form a chess
// board.
////////////////////////////////////////////////////////////////////////////////
var width = 8;
var output = "";

for ( var i = 0; i < width; i++) {
  if (i % 2 == 0)
    output += " ";
  else
    output += "#";
}
//console.log(output);





///CHAPTER 3

////////////////////////////////////////////////////////////////////////////////
///The previous chapter introduced the standard function Math.min that returns
///its smallest argument. We can do that ourselves now. Write a
///function min that takes two arguments and returns their minimum.
////////////////////////////////////////////////////////////////////////////////
  var min = function(a, b) {
    if (a < b)
      return a;
    else
      return b;
  };
  // console.log(min(3, 14));
  // console.log(min(214, -22));




////////////////////////////////////////////////////////////////////////////////
///We’ve seen that % (the remainder operator) can be used to test whether
///a number is even or odd by using % 2 to check whether it’s divisible by
///two. Here’s another way to define whether a positive whole number is
///even or odd:
      ///Zero is even
      ///One is odd
      ///For any other number N, its evenness is the same as N - 2.
///Define a recursive function isEven corresponding to this description. The
///function should accept a number parameter and return a Boolean.
///Test it on 50 and 75. See how it behaves on -1. Why? Can you think
///of a way to fix this?
////////////////////////////////////////////////////////////////////////////////
  function isEven (n) {
      if (n == 0)
        return true;
      else if (n == 1)
        return false;
      else if (n < 0)
        return isEven (-n);
      else
        return isEven(n - 2);
  }
  // console.log(isEven(50));
  // console.log(isEven(75));
  // console.log(isEven(-1));




////////////////////////////////////////////////////////////////////////////////
//// You can get the Nth character, or letter, from a string by writing "string".
// charAt(N), similar to how you get its length with "s".length. The returned
// value will be a string containing only one character (for example, "b"
// ). The first character has position zero, which causes the last one to
// be found at position string.length - 1. In other words, a two-character
// string has length 2, and its characters have positions 0 and 1.
//// Write a function countBs that takes a string as its only argument and
// returns a number that indicates how many uppercase “B” characters are
// in the string.
//// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be
// counted (rather than counting only uppercase “B” characters). Rewrite
// countBs to make use of this new function.
////////////////////////////////////////////////////////////////////////////////
function countBs (string) {
  return countChar(string, "B");
}

function countChar (string, char) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if(string.charAt(i) == char)
      counted += 1;
  return counted;
}
//console.log(countBs("This is a Bs sentence with some bs"));
//console.log(countChar("Here is a sentence with different letters", "e"));




///CHAPTER 4


////////////////////////////////////////////////////////////////////////////////
// Write a range function that takes two arguments, start and end, and
// returns an array containing all the numbers from start up to (and including)
// end.
// Next, write a sum function that takes an array of numbers and returns
// the sum of these numbers. Run the previous program and see whether
// it does indeed return 55.
////////////////////////////////////////////////////////////////////////////////

//part 1

//uses underscore
var numberRange = _.range(1, 11);
console.log(numberRange);

//creates two arguments
function range(start, end){
  var list = [];
  for (; start <= end; start++) {
      list.push(start);
  }
  return list;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));


//part 2
function sum(arr) {
   return arr.reduce(function (a, b) {
      return a + b;
   }, 0);
}
console.log(sum([1, 2, 3, 4, 5]));




////////////////////////////////////////////////////////////////////////////////
// Arrays have a method reverse, which changes the array by inverting the
// order in which its elements appear. For this exercise, write two functions,
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
// as argument and produces a new array that has the same elements in
// the inverse order. The second, reverseArrayInPlace, does what the reverse
// method does: it modifies the array given as argument in order to reverse
// its elements. Neither may use the standard reverse method.
// Thinking back to the notes about side effects and pure functions in
// the previous chapter, which variant do you expect to be useful in more
// situations? Which one is more efficient?
////////////////////////////////////////////////////////////////////////////////
function reverseArray(arr){
  var reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
        reversed += arr[i];
    }
  return reversed;
}
console.log(reverseArray(['cat', 'dog', 'fish', 'dragon']));



function reverseArrayInPlace(arr){
  for (var i = 0; i < Math.floor(arr.length/2); i++) {
    var original = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = original;
    }
  return arr;
}
console.log(reverseArrayInPlace(['cat', 'dog', 'fish']));




////////////////////////////////////////////////////////////////////////////////
// Write a function arrayToList that builds up a data structure like the
// previous one when given [1, 2, 3] as argument, and write a listToArray
// function that produces an array from a list. Also write the helper
// functions prepend, which takes an element and a list and creates a new
// list that adds the element to the front of the input list, and nth, which
// takes a list and a number and returns the element at the given position
// in the list, or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.
////////////////////////////////////////////////////////////////////////////////

//helpful for explaining this section
//https://sherriefuqua.com/pages/blog/articles/eloquent-js-a-list.html
//

//part 1
function arrayToList(array){
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
      list = prepend(array[i], list);
  return list;
}
console.log(arrayToList([1, 2, 3]));


//part 2
function listToArray(list) {
    var arr = [];
    while (list !== null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}
console.log(listToArray(arrayToList([1, 2, 3])));


//part 3
function prepend(value, list) {
  return {value: value, rest: list};
}
console.log(prepend(1, prepend(2, null)));



//part 4
function nth(list, n){
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([1, 2, 3]), 2));




////////////////////////////////////////////////////////////////////////////////
// Write a function, deepEqual, that takes two values and returns true only
// if they are the same value or are objects with the same properties whose
// values are also equal when compared with a recursive call to deepEqual.
// To find out whether to compare two things by identity (use the ===
// operator for that) or by looking at their properties, you can use the
// typeof operator. If it produces "object" for both values, you should do a
// deep comparison. But you have to take one silly exception into account:
// by a historical accident, typeof null also produces "object".
////////////////////////////////////////////////////////////////////////////////

//helpful for explaining this section
//https://sherriefuqua.com/pages/blog/articles/eloquent-js-a-deep-comparison.html
//

function deepEqual(a, b){
  if (a === b) {
    return true;
  }

  if (a === null || typeof a !== "object" ||
      b === null || typeof b !== "object") {
    return false;
  }

  var propertyA = 0;
  var propertyB = 0;
  for (var prop in a) {
    propertyA += 1;
  }
  for (var prop in b) {
    propertyB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }
    return propertyA === propertyB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
