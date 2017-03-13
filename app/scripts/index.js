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
  console.log(min(3, 14));
  console.log(min(214, -22));




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
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));




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
console.log(countBs("This is a Bs sentence with some bs"));
console.log(countChar("Here is a sentence with different letters", "e"));