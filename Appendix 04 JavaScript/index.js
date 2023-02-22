//GTG

// there are mainly 2 types of variable declaration
const a = 2; // for setting constant
let b = 3; //for setting variables
console.log(b);

b = "Hi there" // javascript is dynamically typed
console.log(b, typeof b);

/*

Following is a 
  multi line comment

*/

//type coercion
console.log( 2 + "Hi");
console.log("Hello" + false);
console.log(2 + true);

//operators
b = 2;
console.log(b++);
console.log(b += 1);
console.log(b /= 3);

//expressions, anything that evaluates to a value
console.log("Hi")
console.log(2 + 2)

//comparison operators
console.log(2 > 3);
console.log(2 < 3);

console.log(3 == 5);
console.log(3 != 5);

console.log(4 >= 7);
console.log(5 <= 5);

//booleans -- && (and) || (or)
let a1 = 2, a2 = 3, a3 = 0;
console.log(a1 && a3);
console.log(a1 && a2);
console.log(a1 && a2 && a3);

console.log(a1 || a2);
console.log(a3 || a1);
console.log(a1 || a2 || a3);

console.log(!!"abc") //returns wether a given value is truthy or falsy

//short circuit evaluation
0 && console.log("Hello &&") //console.log() not evaluated
1 && console.log("Hi &&") // console.log() evaluated

0 || console.log("Hello ||") //console.log() evaluated
1 || console.log("Hi ||")// console.log() not evaluated
//TYJC
