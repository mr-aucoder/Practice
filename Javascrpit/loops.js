const arr=[1,2,3,4,5,6,7,8,9,10];
const obj={
    name:"Aman",
    age:17,
    city:"Sukkur"
};
// ++++++++++++++++ For loop ++++++++++++++++++++
// for loop on array 
for (let i = 0; i < arr.length; i++) {
    const forArray = arr[i]; 
    // console.log(forArray);
}

// for loop on object
for (let i = 0; i < Object.keys(obj); i++) {
    const forObject = Object.keys(obj);
    console.log(forObject); 
}