// what are Promises in Java Script?

//A Promise in JavaScript is an object that represents the eventual result (or failure) of an asynchronous operation.
// In simple words it is like a real world promises.A promise for a certain work then it must done on a time which is decided

//Another example: a parents promise there child  to gift him a bike if he scores more than 90%
//if child scores that score he gets a bike.(resolve)
//if child cannot be able to score that much he didnot gets a bike.(reject)
//the child score some score(finally)

// -------------------------
// 1. Basic Promise Example
// -------------------------

const onePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(); // Task completed
    }, 1000);
});

onePromise.then(() => {
    console.log("✅ Task 1 completed");
});


// -------------------------------------
// 2. Promise that returns user object
// -------------------------------------

const twoPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Aman", email: "aucoder@example.com" });
    }, 1000);
});

twoPromise.then((user) => {
    console.log("✅ Task 2 completed:", user);
});


// ------------------------------------------------------
// 3. Promise with error handling (.then / .catch / .finally)
// ------------------------------------------------------

const threePromise = new Promise((resolve, reject) => {
    const error = true;

    if (!error) {
        resolve({ username: "Aman", age: 17, email: "au@example.com" });
    } else {
        reject("❌ Error: Something went wrong");
    }
});

threePromise
    .then((user) => {
        console.log("✅ Task 3 completed:", user);
        return user.username;
    })
    .then((username) => {
        console.log("👤 Username:", username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("⚙️ Task 3: Promise completed (success or fail)");
    });


// ---------------------------------------
// 4. Using Async/Await with a Custom Promise
// ---------------------------------------

const fourthPromise = new Promise((resolve, reject) => {
    const error = false;

    if (!error) {
        resolve({ name: "Manu", DOB: "21 August 2008" });
    } else {
        reject(" Error occurred in fourthPromise");
    }
});

async function handleFourthPromise() {
    try {
        const response = await fourthPromise;
        console.log("Task 4 completed:", response);
    } catch (error) {
        console.log(error);
    }
}

handleFourthPromise();


// ---------------------------------------
// 5. Fetching data from GitHub API (Async/Await)
// ---------------------------------------

async function fetchGitHubUser() {
    try {
        const response = await fetch("https://api.github.com/users/mr-aucoder");

        if (!response.ok) {
            throw new Error(` HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("GitHub User Data (Async):", data);
    } catch (error) {
        console.log(" Fetch error:", error);
    }
}

fetchGitHubUser();


// ---------------------------------------
// 6. Fetching data using .then / .catch
// ---------------------------------------

fetch("https://api.github.com/users/mr-aucoder")
    .then((response) => {
        if (!response.ok) {
            throw new Error(` HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(" GitHub User Data (.then):", data);
    })
    .catch((error) => {
        console.log(" Fetch error (.then):", error);
    });
 
//====================================================================================
//  Why we need async await instead of promises in Java Script?
//==================================================================================== 

// In JavaScript, Promises and async/await do the same thing:
// They handle asynchronous operations (like fetching data or reading files).
// But the way you write and read the code is different.

//Async await code looks cleaner like sync code and it easier to debug.

//Note:Both are good the only thing matter is use case.
