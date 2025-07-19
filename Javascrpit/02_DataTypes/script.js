//====================================================================================
//                              DATA TYPES
//====================================================================================
//A data type in JavaScript (or any programming language) tells the kind of data a variable can hold.

// It defines:
// What kind of value it stores (number, text, true/false, etc.).
// What operations can be performed on it.
/*In simple words it is like conatiner which hold different kind of stuff such as 

>   Water bottle stores quantity.(Number)
>   firdge stores differnet kind of items.(Object)
>   Salad bowl has different kind of vegetables and fruits.(Array)
>   Id card mainly stores your name,address,your age etc.(String)
>   Switch ON/OFF stores value.(Boolean)
*/

// JavaScript defines two main categories of data types: 
// Primitive:These are single values and are immutable.(cannot be changed)
// Non-Primitive (or Reference):These hold collections or complex structures and are mutable.

//==============================================
//                PRIMITIVE Data Types
//===============================================
// 1. Number
    // Includes both integers and floating-point numbers.
    // Special numeric values: Infinity, -Infinity, NaN
    let price = 99.99;
    let count = 5;
// console.log(typeof price); // Output:number
// With typeof we can check type of any variable

// Used for: math operations, counters, prices, etc.

// 2.  String
    // Sequence of characters, written in ' ', " " and ``.
    // Supports escape characters and template literals.

let greeting = "Hello, world!";
let name = 'Ali';
let msg = `Welcome, ${name}!`;
// console.log(typeof msg); // string

// Used for: names, messages, input/output, HTML content

// 3. Boolean

//     Only true or false
//     Common in conditions and logic

let isLoggedIn = true;
let hasPermission = false;
//console.log(typeof isLoggedIn); // boolean

// Used in: if statements, comparisons, toggles

// 4. Null

//     Special value that means "no value"
//     It's intentionally empty.

let selectedUser = null;
// console.log(typeof selectedUser); // object (this is a bug in JS)

//  Used to reset a variable or clear a value.
//Note:null is a empty object.

// 5. Undefined
//     A variable that is declared but not assigned.

let x;
// console.log(x); // undefined
// console.log(typeof x); // undefined

// Happens when:

//     Variable declared without value
//     Function has no return
//     Object property doesn’t exist

// 6. Symbol (ES6)

//     Represents a unique and immutable value.
//     Mostly used in objects to avoid property name clashes.

let sym = Symbol("id");
// console.log(typeof sym); // symbol

// Rare, used in advanced object manipulation (like hiding properties).


//  7. BigInt
//     Introduced to handle very large numbers beyond normal range.

let big = 1234567890123456789012345678901234567890n;
// console.log(typeof big); // bigint

// Used in cryptography, precise scientific calculations, etc.

//====================================================
//.           Non PRIMITIVE Data Types
//====================================================
//1.  Object:

// Collection of key-value pairs (can contain any data types).
// they are declared by {}
let user = {
  name: "Ali",
  age: 25,
  isAdmin: true
};
//console.log(typeof user); // object

//Used for structured data (user profiles, settings, etc.)

//9. Array

//Ordered collection of values (indexed from 0)
//they declared by []

let fruits = ["apple", "banana", "cherry"];
//console.log(typeof fruits); // object
//console.log(Array.isArray(fruits)); // true

// Used for: lists, menus, data sets, loops
