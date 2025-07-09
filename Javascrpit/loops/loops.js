const arr=[1,2,3,4,5,6,7,8,9,10];
const obj={
    name:"Aman",
    age:17,
    city:"Sukkur"
};
// ++++++++++++++++ For loop ++++++++++++++++++++
// Basic Syntax:
// for (initialization; condition; increment) {
// code to run
// }

// for loop on array 
for (let i = 0; i < arr.length; i++) {
    const forArray = arr[i]; 
    // console.log(forArray);
};

// for loop on object
const keys=Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    // console.log(`${keys[i]} ${obj[keys[i]]}`); 
}
//Usage:You want to run code a specific number of times.

// +++++++++++++While loop++++++++++++++++++++++
// Basic Syntax:
// while (condition) {
//  code to run
// increment
// }

//While loop on Array:
let i=0;
while (i<arr.length) {
    // console.log(arr[i]);
    i++
};

//While loop on object:
while (i<keys.length){
    // console.log(`${keys[i]},${obj[keys[i]]}`);
    i++
};
//Usage:You don’t know how many times you’ll repeat, but have a condition.

// ++++++++++++++DO While LOOP+++++++++++++++
// Basic Syntax:
// do {
//  code to run
// increment
// } while (condition);
//  Every thing is same like While loop just usage is different
// Usage:You want to run code at least once, even if the condition is false at first.


//+++++++++++++++++For of loop++++++++++++++++++
// Basic Synatx:
// for (const element of object) {
//  // Code To Run
// }

//+++++++++For of Loop in Array++++++++++++++++++
for (const arrs of arr) {
    // console.log(arrs);
}

//+++++++++Fro of Loop in Object+++++++++++++++++
for (const key of keys) {
    // console.log(`${[key]} ${obj[key]}`)
}
//Usage:You want to loop over values in an array, string, etc.

// +++++++++ For in Loop+++++++++++++++++
//Basic syntax:
// for (const key in object) {
//     if (Object.prototype(prototype is exceptional).hasOwnProperty.call(object, key)) {
//         const element = object[key];
//     }
// }
// for in loop in Object:
for (const objs in obj) {
    // console.log(`${objs} ${obj[objs]}`)   
}
// for in loop in Array:

for (const arrs in arr) {
    // console.log(`${arr[arrs]}`)
}
//Usage:You want to loop through object properties (keys).