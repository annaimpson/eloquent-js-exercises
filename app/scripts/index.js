var _ = require('underscore');

var ANCESTRY_FILE = "[\n  " + [
	  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
	  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
	  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
	  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
	  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
	  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
	  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
	  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
	  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
	  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
	  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
	  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
	  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
	  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
	  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
	  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
	  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
	  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
	  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
	  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
	  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
	  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
	  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
	  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
	  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
	  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
	  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
	  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
	  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
	  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
	  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
	  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
	  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
	  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
	  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
	  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
	  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
	  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
	  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
	].join(",\n  ") + "\n]";




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
//console.log(numberRange);

//creates two arguments
function range(start, end){
  var list = [];
  for (; start <= end; start++) {
      list.push(start);
  }
  return list;
}
//console.log(range(1, 10));
//console.log(sum(range(1, 10)));


//part 2
function sum(arr) {
   return arr.reduce(function (a, b) {
      return a + b;
   }, 0);
}
//console.log(sum([1, 2, 3, 4, 5]));




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
//console.log(reverseArray(['cat', 'dog', 'fish', 'dragon']));



function reverseArrayInPlace(arr){
  for (var i = 0; i < Math.floor(arr.length/2); i++) {
    var original = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = original;
    }
  return arr;
}
//console.log(reverseArrayInPlace(['cat', 'dog', 'fish']));




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
//console.log(arrayToList([1, 2, 3]));


//part 2
function listToArray(list) {
    var arr = [];
    while (list !== null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}
//console.log(listToArray(arrayToList([1, 2, 3])));


//part 3
function prepend(value, list) {
  return {value: value, rest: list};
}
//console.log(prepend(1, prepend(2, null)));



//part 4
function nth(list, n){
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
//console.log(nth(arrayToList([1, 2, 3]), 2));




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
//console.log(deepEqual(obj, {here: 1, object: 2}));
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));




//Chapter 5




////////////////////////////////////////////////////////////////////////////////
// Use the reduce method in combination with the concat method to “flatten”
// an array of arrays into a single array that has all the elements of the input
// arrays.
////////////////////////////////////////////////////////////////////////////////
var arrays = [[1, 2, 3],[,4, 5, 6]];
console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}));



////////////////////////////////////////////////////////////////////////////////
// Using the example data set from this chapter, compute the average age
// difference between mothers and children (the age of the mother when
// the child is born). You can use the average function defined earlier in
// this chapter.
////////////////////////////////////////////////////////////////////////////////
var ancestors = JSON.parse(ANCESTRY_FILE);
var peoplesName = {};

ancestors.forEach(function(person) {
  peoplesName[person.name] = person;
});

function age(person) {
  return (person.died - person.born);
}

function motherInData(person) {
  return (person.mother in peoplesName);
}

function ageDifference(person) {
  return (Math.abs(age(peoplesName[person.mother]) - age(person)));
}

function average(array) {
  return (array.reduce(function(element, elementPlusOne) {
    return element + elementPlusOne;
  })/array.length);
}

//console.log(average(ancestors.filter(motherInData).map(ageDifference)));




////////////////////////////////////////////////////////////////////////////////
// When we looked up all the people in our data set that lived more than
// 90 years, only the latest generation in the data came out. Let’s take a
// closer look at that phenomenon.
// Compute and output the average age of the people in the ancestry data
// set per century. A person is assigned to a century by taking their year
// of death, dividing it by 100, and rounding it up, as in Math.ceil(person.
// died / 100).
////////////////////////////////////////////////////////////////////////////////
function groupBy(array, computeGroup) {
	  var peopleByGroup = {};
	  array.forEach(function(person) {
	    var currentGroup = computeGroup(person);
	    if(currentGroup in peopleByGroup) {
	      peopleByGroup[currentGroup].push(person);
	    } else {
	      peopleByGroup[currentGroup] = [person];
	    }
	  });
	  return peopleByGroup;
}

function computeCentury(person) {
  return String((Math.ceil(person.died / 100)));
}

function average(array) {
  return array.reduce(function(a, b){return a + b;}) / array.length;
}

function age(person) {
  return person.died - person.born;
}

var peopleByCentury = groupBy(ancestors, computeCentury);
var avgAgeByCent = {};
for(var century in peopleByCentury) {
  var peopleInCentury = peopleByCentury[century];
  avgAgeByCent[century] = average(peopleInCentury.map(age));
}

//console.log(avgAgeByCent);



////////////////////////////////////////////////////////////////////////////////
// Write two functions, every and some, that behave like these methods,
// except that they take the array as their first argument rather than being
// a method.
////////////////////////////////////////////////////////////////////////////////
var array = [1, 2, 3, 4, 5, 6, "Seven"];
	//console.log(every(array, isNumber));
	//console.log(some(array, isNumber));
	// A simple predicate function that tests that if a varaible is of type number
	function isNumber(toTest) {
	  return (typeof toTest === "number");
	}

  function every(array, predicate) {
	  for( var i = 0 ; i < array.length ; i++ )
	    if(!predicate(array[i])) return false;
	  return true;
	}

  function some(array, predicate) {
	  for( var i = 0 ; i < array.length ; i++ )
	    if(predicate(array[i])) return true;
	  return false;
	}




///Chapter 6




// Write a constructor Vector that represents a vector in two-dimensional
// space. It takes x and y parameters (numbers), which it should save to
// properties of the same name.
// Give the Vector prototype two methods, plus and minus, that take another
// vector as a parameter and return a new vector that has the sum
// or difference of the two vectors’ (the one in this and the parameter) x
// and y values.
// Add a getter property length to the prototype that computes the length
// of the vector—that is, the distance of the point (x, y) from the origin (0,
// 0).
function Vector(x, y){
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(a){
	return new Vector(this.x + a.x, this.y + a.y);
};

Vector.prototype.minus = function(a){
	return new Vector(this.x - a.x, this.y - a.y);
};

Vector.prototype.__defineGetter__("length", function(){
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
});

Object.defineProperty(Vector.prototype, "norm", {get: function(){
	return Math.sqrt(this.x*this.x + this.y*this.y);
}});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);



// Implement a cell type named StretchCell(inner, width, height) that conforms
// to the table cell interface described earlier in the chapter. It should
// wrap another cell (like UnderlinedCell does) and ensure that the resulting
// cell has at least the given width and height, even if the inner cell would
// naturally be smaller.
function StretchCell(inner, width, height){
	this.inner = inner;
	this.width = width;
	this.height = height;

	var text = this.inner.text;
	if (text.length < height) {
		while (height - text.length > 0) {
			text = text.concat([""]);
			--height;
		}
	}
	this.inner.text = text.map(function (line){
		if (line.length < width) {
			return line.concat(repeat(" ", width - line.length));
		} else {
			return line;
		}
	});
}

StretchCell.prototype.minHeight = function(){
	return this.inner.minHeight();
};

StretchCell.prototype.minWidth = function(){
	return this.inner. minWidth();
};

StretchCell.prototype.draw = function(x, y){
	return this.inner.draw(x, y);
};

// var sc = new StretchCell(new TextCell("abc"), 1, 2);
// console.log(sc.minWidth());
// console.log(sc.minHeight());
// console.log(sc.draw(3, 2));




// Design an interface that abstracts iteration over a collection of values.
// An object that provides this interface represents a sequence, and the
// interface must somehow make it possible for code that uses such an
// object to iterate over the sequence, looking at the element values it is
// made up of and having some way to find out when the end of the sequence
// is reached.
// When you have specified your interface, try to write a function logFive
// that takes a sequence object and calls console.log on its first five elements—
// or fewer, if the sequence has fewer than five elements.
// Then implement an object type ArraySeq that wraps an array and allows
// iteration over the array using the interface you designed. Implement
// another object type RangeSeq that iterates over a range of integers (taking
// 126 from and to arguments to its constructor) instead.
function ArraySeq(a) {
    this.container = a;
}
ArraySeq.prototype.begin = function () {
    this.curr_idx = 0;
    return this.curr_idx;
};
ArraySeq.prototype.end = function () {
    return this.container.length;
};
ArraySeq.prototype.next = function () {
    ++this.curr_idx;
    return this.curr_idx;
};
ArraySeq.prototype.valueAt = function (iterator) {
    return iterator < this.container.length ? this.container[iterator] : undefined;
};


function RangeSeq(from, to) {
    this.container = [];
    for(var i=from; i<=to; ++i) {
        this.container.push(i);
    }
}
RangeSeq.prototype = Object.create(ArraySeq.prototype);


function logFive(seq) {
    var c = 0;
    for(var i=seq.begin(); i!=seq.end() && c<5; i=seq.next(), ++c) {
        console.log(seq.valueAt(i));
    }
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));



//Chapter 8




// Say you have a function primitiveMultiply that, in 50 percent of cases,
// multiplies two numbers, and in the other 50 percent, raises an exception
// of type MultiplicatorUnitFailure. Write a function that wraps this clunky
// function and just keeps trying until a call succeeds, after which it returns
// the result.
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply1(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    } else {
      throw e;
    }
  }
}

function reliableMultiply2(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        continue;
      } else
        throw e;
    }
  }
}

console.log(reliableMultiply1(8, 8));
console.log(reliableMultiply1(6, 6));




// It is a box with a lock. Inside is an array, but you can get at it only
// when the box is unlocked. Directly accessing the _content property is not
// allowed.
// Write a function called withBoxUnlocked that takes a function value as
// argument, unlocks the box, runs the function, and then ensures that the
// box is locked again before returning, regardless of whether the argument
// function returned normally or threw an exception.
function withBoxUnlocked(body) {
  box.unlock();
  try {
    body();
  }
  catch (e) {
    // do nothing
  } finally {
    box.lock();
  }
}

function withBoxUnlocked(body) {
  var state = box.locked;
  box.unlock();
  try {
    body();
  } catch (e) {
    // do nothing
  } finally {
    if (state) {
      box.lock();
    }
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

withBoxUnlocked(function() {
  throw new Error("Pirates on the horizon! Abort!");
});
console.log(box.locked);
