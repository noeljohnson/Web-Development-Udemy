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

//clear prior outputs
console.clear()

//ternary operator
console.log(2 > 5 ? "Is greater" : "Is not greater");

//Object Types
const obj = {
  name: "Jacob",
  age: 41
};

console.log(obj);
obj.job = "Programmer";
delete obj.age //deleting an item from an object

console.log(obj, obj["job"]);
console.log(Object.keys(obj)); //access all the keys
console.log(Object.values(obj)); //access all corresponding values

// Arrays Object Types
arr = [2, 3, 5];
arr.push(4); //appends at the end of the array
console.log(arr);
console.log(Object.keys(arr)); //Accessing object methods
arr.push(5);
arr.pop(); //deletes the end element from the array
console.log(arr);

//functions
function f1(a, b){
  console.log(a, b);
  return (a + b);
}

console.log(f1(2,3));
console.log(f1(1));

//anonymous functions, arrow notation
const f2 = (a, b) =>{
  console.log(a, b);
  return (a + b);
}

console.log(f2(2,3));
console.log(f2(1));

//callback functions
setTimeout(()=>{console.log("1s finished")}, 1000);

//methods and properties in objects
const math = {
  pi: Math.PI,
  sum: function (a, b){
    return (a + b);
  },
  multiply: (a, b) =>{
    return (a * b);
  }
};

const [a4, b4] = [2, 3]; //array destructuring
console.log(math.sum(a4, b4));
console.log(math.multiply(a4, b4));

//object destructuring
console.log(obj);
const {name, job} = obj;
console.log(name, job);

//using destructuring with functions
function printInfo({name="Jane Doe", job="Student"}){
  console.log(`${name} is a ${job}`);//template strings
}

printInfo(obj);

// if else statements
if (2 > 3){
  console.log("Truthy");
}else{
  console.log("Falsy");
}
//TYJC
