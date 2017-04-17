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



//Chapter 7



//There are several obvious problems with our herbivores. First, they
// are terribly greedy, stuffing themselves with every plant they see until
// they have wiped out the local plant life. Second, their randomized movement
// (recall that the view.find method returns a random direction when
// multiple directions match) causes them to stumble around ineffectively
// and starve if there don’t happen to be any plants nearby. And finally,
// they breed very fast, which makes the cycles between abundance and
// famine quite intense.


var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();

function Vector (x , y ) {
	this.x = x ;
	this.y = y ;
}

Vector.prototype.plus = function ( other ) {
	return new Vector ( this.x + other.x , this.y + other.y ) ;
};
Vector.prototype.equals = function(other) {
  return this.x === other.x && this.y === other.y;
};
Vector.prototype.length = function() {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

function Grid ( width , height ) {
	this.space = new Array ( width * height ) ;
	this.width = width ;
	this.height = height ;
}
Grid.prototype.isInside = function ( vector ) {
	return vector.x >= 0 && vector.x < this.width &&
	vector.y >= 0 && vector.y < this.height ;
};
Grid.prototype.get = function ( vector ) {
	return this.space [ vector.x + this.width * vector.y ];
};
Grid.prototype.set = function ( vector , value ) {
	this.space [ vector.x + this.width * vector.y ] = value ;
};
Grid.prototype.forEach = function(f, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value != null)
        f.call(context, value, new Vector(x, y));
    }
  }
};
Grid.prototype.forEachSpace = function(f, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value === null)
        f.call(context, value, new Vector(x, y));
    }
  }
};

var directions = {
" n ": new Vector ( 0 , -1),
" ne ": new Vector ( 1 , -1),
" e ": new Vector ( 1 , 0),
" se ": new Vector ( 1 , 1),
" s ": new Vector ( 0 , 1),
" sw ": new Vector ( -1 , 1),
" w ": new Vector ( -1 , 0),
" nw ": new Vector ( -1 , -1)
};

function randomElement ( array ) {
	return array [ Math.floor ( Math.random() * array.length )];
}
var directionNames = " n ne e se s sw w nw ".split (" ");

function elementFromChar ( legend , ch ) {
	if ( ch == " ")
		return null;
	var element = new legend [ ch ]();
	element.originChar = ch;
	return element;
}

function World ( map , legend ) {
		var grid = new Grid ( map [0].length, map.length );
		this.grid = grid;
		this.legend = legend;

		map.forEach ( function ( line , y ) {
			for ( var x = 0; x < line.length ; x ++)
				grid.set ( new Vector (x , y ),
						elementFromChar ( legend , line [ x ]) );
		});
}

function charFromElement(element) {
  if (element == null)
    return " ";
  else
    return element.originChar;
}

World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += "\n";
  }
  return output;
};
World.prototype.turn = function() {
  var acted = [];
  var energy = {};
  var count = {};

  Array.prototype.forEach.call(document.querySelectorAll('tbody'), function(tbody){
     while (tbody.hasChildNodes()) tbody.removeChild(tbody.lastChild);
  });

  this.grid.forEach(function(critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      var char = charFromElement(critter);
      count[char] = count[char] ? count[char] + 1 : 1;
      energy[char] = energy[char] ? energy[char] + critter.energy : critter.energy;
      acted.push(critter);
      this.letAct(critter, vector);
      //renderRow(critter);
    }
  }, this);

  if (!this.findRandom(' ')) {
      return false;
  } else {
      for (var key in this.legend) {
        if (key !== '#' && this.legend.hasOwnProperty(key) && !count.hasOwnProperty(key)) {
          return false;
        } else if (key !== '#') {
            energy[key] = energy[key] / count[key];
        }
      }
  }

  return {
      energy: energy,
      count: count
  };
};
World.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  if (action && action.type == "move") {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
};
World.prototype.checkDestination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
};
World.prototype.findRandom = function(ch) {
  var all = [];

  this.grid.forEachSpace(function(value, vector) {
    all.push(vector);
  }, this);

  if (all.length) {
    return randomElement(all);
  }

  return null;
};

function View(world, vector) {
  this.world = world;
  this.vector = vector;
}
View.prototype.look = function(dir, depth) {
  var ret = [];
  depth = depth || 1;
  var target = this.vector;
  var ret = [];
  for (var i = 0; i < depth; i++) {
    var target = target.plus(directions[dir]);
    if (this.world.grid.isInside(target))
      ret.push(charFromElement(this.world.grid.get(target)));
    else
      ret.push("#");
  }
  return ret;
};
View.prototype.findAll = function(ch, depth) {
  var found = [];
  for (var dir in directions) {
    var look = this.look(dir, depth);
    for (var i = 0; i < look.length; i++) {
      if (look[i] == ch) {
        found.push(dir);
        break;
      }
    }
  }
  return found;
};
View.prototype.find = function(ch, depth) {
  var found = this.findAll(ch, depth);
  if (found.length == 0) return null;
  return randomElement(found);
};
View.prototype.findAnywhere = function(ch) {
  return this.world.grid.findRandom(ch);
};

function Wall() {}

function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

function LifelikeWorld(map, legend) {
  World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);

var actionTypes = Object.create(null);

LifelikeWorld.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  var handled = action &&
    action.type in actionTypes &&
    actionTypes[action.type].call(this, critter, vector, action);
  if (!handled) {
    critter.energy -= 0.2;
    if (critter.energy <= 0)
      this.grid.set(vector, null);
  }
};

actionTypes.grow = function(critter) {
  critter.energy += 0.5;
  return true;
};
actionTypes.move = function(critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  if (dest == null ||
      critter.energy <= 1 ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, critter);
  return true;
};
actionTypes.eat = function(critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  var atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy == null)
    return false;
  critter.energy += atDest.energy;
  //if (atDest.row && atDest.row.parentNode) atDest.row.parentNode.removeChild(atDest.row);
  this.grid.set(dest, null);
  return true;
};
actionTypes.reproduce = function(critter, vector, action) {
  var baby = elementFromChar(this.legend,
                             critter.originChar);
  var dest = this.checkDestination(action, vector);
  if (
    dest == null ||
    critter.energy <= 2 * baby.energy ||
    this.grid.get(dest) != null
  )
    return false;
  critter.energy -= 2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
};
actionTypes.reproduceRandom = function(critter, action) {
  var baby = elementFromChar(this.legend,
                             critter.originChar);
  var dest = this.findRandom(' ');
  if (dest == null ||
    critter.energy <= 2 * baby.energy ||
    this.grid.get(dest) != null
  )
    return false;
  critter.energy -= 2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
};

function Plant() {
  this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(context) {
  if (this.energy > 15) {
    var space = context.find(" ");
      if (space)
        return {type: "reproduce", direction: space};
  }
  if (this.energy < 20)
    return {type: "grow"};
};

var plantEaterId = 0;

function PlantEater() {
  this.energy = 20;
  this.id = plantEaterId++;
  this.type = 'plant-eater';
  this.char = 'O';
  this.message = 'I\'m doin the random thing.';
  this.row = document.createElement('tr');
}
PlantEater.prototype.act = function(context) {
  var space = context.find(" ");
  if (this.energy > 50 && space)
    return {type: "reproduce", direction: space};
  var plant = context.find("*");
  if (plant)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};

function renderRow(critter) {
  if (critter.row) {
    if (critter.energy <= 0) {
      critter.row.parentNode.removeChild(critter.row);
    } else {
      if (!critter.row.parentNode) {
          document.getElementById(critter.type + '-table').appendChild(critter.row);
      }
      critter.row.innerHTML = '<td class="element-cell ' + critter.type + '">' + critter.char + '</td>';
      critter.row.innerHTML += '<td>' + critter.id + '</td>';
      critter.row.innerHTML += '<td>' + (Math.round(critter.energy * 10) / 10) + '</td>';
      critter.row.innerHTML += '<td>' + critter.message + '</td>';
    }
  }
}

function animateWorld(world, elId, speed, limit) {
  var worldContainer = document.getElementById(elId);
  var worldElement = worldContainer.querySelector('.world');
  var ctx = worldElement.getContext('2d');
  var ratio = PIXEL_RATIO;
  var hElementSize = 11;
  var vElementSize = 16;
  var w = world.grid.width * hElementSize;
  var h = world.grid.height * vElementSize;
  worldElement.width = w * ratio;
  worldElement.height = h * ratio;
  worldElement.style.width = w + "px";
  worldElement.style.height = h + "px";
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  var energyChart = new Highcharts.Chart({
    title: {
        text: 'Avg Life Form Energy'
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        line: {
            marker: {
                enabled: false
            }
        }
    },
    chart: {
      renderTo: worldContainer.querySelector('.energy-chart'),
      animation: false
    }
  });
  var countChart = new Highcharts.Chart({
    title: {
      text: 'Avg Life Form Count'
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        line: {
            marker: {
                enabled: false
            }
        }
    },
    chart: {
      renderTo: worldContainer.querySelector('.count-chart'),
      animation: false
    }
  });
  var energySeries = {};
  var countSeries = {};
  var colors = {
      '@': '#ffa500',
      'O': '#ffcccc',
      '*': '#aaffbb'
  };
  ['@', '*', 'O'].forEach(function(char){
      energySeries[char] = energyChart.addSeries({
          name: char,
          color: colors[char],
          data: [[0,0]]
      }, true, true);
      countSeries[char] = countChart.addSeries({
          name: char,
          color: colors[char],
          data: [[0,0]]
      }, true, true);
  });
  var turnsElement = worldContainer.querySelector('.turns');
  var avgEnergyElement = worldContainer.querySelector('.energy-avg');
  var turns = 0;
  var stats = {};

  function renderSymbol(left, top, hElementSize, vElementSize, content, backgroundFill, textFill) {
    ctx.fillStyle = backgroundFill;
    ctx.save();
    ctx.fillRect(left, top, hElementSize, vElementSize);
    if (content) {
      ctx.font = '18px monospace';
      ctx.fillStyle = textFill;
      ctx.save();
      ctx.fillText(content, left, top + vElementSize * 0.9);
    }
  }

  function renderLine(line, index) {
    var content;
    var backgroundFill;
    var textFill;

    for (var i = 0; i < line.length; i++) {
      content = line.charAt(i);
      switch(content) {
        case '#':
          backgroundFill = '#ccc';
          textFill = '#aaa';
          break;
        case 'O':
          backgroundFill = '#573b0c';
          textFill = '#ffcccc';
          break;
        case '@':
          backgroundFill = '#573b0c';
          textFill = '#ffa500';
          break;
        case '*':
          backgroundFill = '#573b0c';
          textFill = '#aaffbb';
          break;
        default:
          backgroundFill = '#573b0c';
          content = null;
      }
      renderSymbol(i * hElementSize, index * vElementSize, hElementSize, vElementSize, content, backgroundFill, textFill);
    }
  }

  var ret = function() {
    if ((!limit || turns < limit) && stats) {
      var lines =  world.toString().split('\n');
      var lastFiveStats = [];
      lines.forEach(renderLine);
      stats = world.turn();
      if (stats) {
        lastFiveStats.push(stats);
        if (lastFiveStats.length > 5) lastFiveStats.unshift();
        avgEnergyHTML = '';

        ['*', 'O', '@'].forEach(function(key){
            avgEnergyHTML += key + ': ' + Math.round(stats.energy[key]) + ' ';
            energySeries[key].addPoint([turns, Math.round(stats.energy[key])], true, turns > 50, false);
            countSeries[key].addPoint([turns, Math.round(stats.count[key])], true, turns > 50, false);
        });

        avgEnergyElement.innerHTML = avgEnergyHTML;
      }
      turnsElement.innerHTML = turns++ + 1;
      window.requestAnimationFrame(ret);
    } else {
      worldContainer.querySelector('.unbalanced').innerHTML = 'Unbalanced!';
    }
  };

  return ret;
}

var smartPlantEaterId = 0;

function SmartPlantEater() {
  this.energy = 20;
  this.foodLocations = [];
  this.id = smartPlantEaterId++;
  this.type = 'smart-plant-eater';
  this.char = 'O';
  this.message = 'I\'m new!';
  this.row = document.createElement('tr');
}
SmartPlantEater.prototype.isHungry = function() {
  return 40 / Math.max(40, this.energy) >= Math.random();
};
SmartPlantEater.prototype.findFood = function(spaces) {
  var bestDirection = null;

  var tmpFoodLocations = this.foodLocations.slice();

  for (var i = 0; i < this.foodLocations.length && bestDirection === null; i++) {
    var foodLocation = this.foodLocations[i];
    var travelDistance = foodLocation.length();

    if (travelDistance === 0) {
      tmpFoodLocations.pop();
      continue;
    }

    for (var i = 0; i < spaces.length; i++) {
      if (foodLocation.plus(directions[spaces[i]]).length() < travelDistance) {
        bestDirection = spaces[i];
      }
    }

    if (bestDirection === null) {
      tmpFoodLocations.push(tmpFoodLocations.shift());
    }
  }

  this.foodLocations = tmpFoodLocations;

  return bestDirection;
};
SmartPlantEater.prototype.updateLocation = function(direction) {
  var vector = directions[direction];

  for (var i = 0; i < this.foodLocations.length; i++) {
      this.foodLocations[i] = this.foodLocations[i].plus(vector);
  }

  this.foodLocations.sort(function(a, b) {
    var aLength = a.length();
    var bLength = b.length();

    if (aLength < bLength) {
      return -1;
    } else if (aLength > bLength) {
      return 1;
    } else {
      return 0;
    }
  });
};
SmartPlantEater.prototype.act = function(context) {
  this.message = '';
  var spaces = context.findAll(" ");
  var space = randomElement(spaces);

  if (this.energy > 50 && space) {
    return {type: "reproduce", direction: space};
  }

  var plant = context.findAll("*");
  var shouldEat = this.isHungry() && plant && plant.length > 1;

  if (!plant.length) {
    plant = randomElement(context.findAll('*', 5));
    var hunt = plant && context.look(plant, 1)[0] === ' ';
    if (hunt) {
      this.message = 'On the hunt: ' + plant;
      space = plant;
    }
  } else {
    plant = randomElement(plant);
    var foodVector = new Vector(0, 0);
    var addLocation = !this.foodLocations.length || this.foodLocations[0].length() !== 0;
    if (this.foodLocations.length > 3) {
      this.foodLocations.pop();
    }
    if (shouldEat) {
      if (addLocation) this.foodLocations.unshift(foodVector);
      this.message = 'NomNomNom!';
      return {type: "eat", direction: plant};
    } else {
      this.message = 'Found food!';
      if (addLocation) this.foodLocations.push(foodVector);
    }
  }

  if (space) {
    if (!hunt && shouldEat) {
      var foodDirection = this.findFood(spaces);
      if (foodDirection !== null) {
          space = foodDirection;
      }
    }
    this.updateLocation(space);
    if (!this.message.length) this.message = 'Moving: ' + space;
    return {type: "move", direction: space};
  }
  this.message = 'No where to go!';
};



function SmartPlantEater() {}

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));


// Any serious ecosystem has a food chain longer than a single link. Write
// another critter that survives by eating the herbivore critter. You’ll notice
// that stability is even harder to achieve now that there are cycles
// at multiple levels. Try to find a strategy to make the ecosystem run
// smoothly for at least a little while.
// One thing that will help is to make the world bigger. This way, local
// population booms or busts are less likely to wipe out a species entirely,
// and there is space for the relatively large prey population needed to
// sustain a small predator population.
