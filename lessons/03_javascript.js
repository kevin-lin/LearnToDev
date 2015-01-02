// Lets dive right into Javascript. File you are reading right
// now is a Javascript file. The sentences I am writing here are
// commented out. You can comment out a line of code by putting two
// slashes at the front of the line. Commented out code does not run
// when you run the program.

// The first function we are going to learn is console.log(). console.log
// is used to print to your terminal window. 
console.log("hello world");

// Variables
var x = 5; // create a new variable x and set it equal to 5
x = 6; // x == 6
x = x + 1; // x == 7

// Boolean operators &&, ||, ==
// boolean operators operate on boolean values (true/false)
// x && y evaluates to true if both x and y are true
// x || y evaluates to true if either x or y are true
// x == y evalutes to true if x has the same value as y
// order of operations: && has the highest precidence, followed
// by || and ==
true && true == true;
true && false == false;
true || false == true;
false || false == false;
true && true && false == false;
false || true || false == true;
false || true && false == false || (true && false);

// if else statements
if(x == 7){
  console.log("x is equal to 7");
}
else{
  console.log("x is not equal to 7");
}

// functions
function f(x){
  console.log(x);
}
f(1); // prints "1"
f("foo"); // prints "foo"

// function will take in a number and return true if it is odd
function testOdd(x){
  if(x % 2 == 0){ // if the remainder of x/2 is 0
    return false;
  }
  else{
    return true;
  }
}

console.log(testOdd(5)); // prints true;
console.log(testOdd(4)); // prints false;
