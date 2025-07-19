// ==========================================================
//  JAVASCRIPT OOP (OBJECT ORIENTED PROGRAMMING)
// ==========================================================

/*
OOP stands for Object-Oriented Programming — a style of coding based on objects.
In JavaScript, we use OOP to group related data (properties) and actions (methods) inside objects or classes.
// In other words collection of properties and method.

//===========================================================
//                 Parts of OOP
//===========================================================

//-----------------------------------------------------------
//                 Object literal
//-----------------------------------------------------------
/*
✅ Most basic way to define an object.
✅ Good for small objects that don’t need duplication.
*/
//Example:

const student = {
  name: "Ali",
  age: 20,
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  }
};
// console.log(student.greet);

//  Drawback:
// - If you need 100 students, you'll have to copy-paste.
// - No reusability or inheritance.


//-----------------------------------------------------------
//                 Constructor Function
//-----------------------------------------------------------
/*
 A function used to create multiple similar objects.
 Uses 'this' to attach properties and methods.
 Use 'new' keyword to create an instance.
*/
//when ever we use 'new' keyword it returns empty object. which we say its instance
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}`);
  };
}

const person1 = new Person("Aman", 22);
// person1.greet(); 

/*
Drawback:
- Methods are duplicated for every instance (memory waste).
- Better to use prototype for shared methods.
*/

// ==========================================================
// 🔹 1. CLASS and OBJECT BASICS
// ==========================================================

/*
CLASS:
- A blueprint/template for creating objects.
- It defines what properties and methods the object should have.

OBJECT:
- An instance created using a class.
*/

// ✅ Define a Class
class Car {
  constructor(brand, model) {
    this.brand = brand;     // property
    this.model = model;     // property
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving 🚗`);
  }
}

// ✅ Create an Object (instance of Car class)
const myCar = new Car("Toyota", "Corolla");
myCar.drive();  // Output: Toyota Corolla is driving 🚗

// Main Concepts (4 Pillars of OOP):
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism
//


// ==========================================================
// 🔹 1. ABSTRACTION - Hide Complexity, Show Essentials
// ==========================================================

/*
Real-life example: TV Remote — you press a button, it works. You don't need to know the internal wiring.

Abstraction in code means hiding internal details and only exposing what's necessary to the outside.
*/

class CoffeeMachine {
  makeCoffee() {
    this.#boilWater();
    this.#brew();
    console.log("☕ Coffee is ready!");
  }

  #boilWater() {
    console.log("Boiling water...");
  }

  #brew() {
    console.log("Brewing coffee...");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee();
// Output:
// Boiling water...
// Brewing coffee...
// ☕ Coffee is ready!
// machine.#boilWater(); // ❌ Error - private method

// ==========================================================
// 🔹 2. ENCAPSULATION - Protect the Data
// ==========================================================

/*
Encapsulation = Keeping data safe and secure by restricting direct access.

Real-life example: Medicine Capsule — you can’t access chemicals directly; it's sealed.
Use '#' for private properties and expose via methods if needed.
*/

class BankAccount {
  #balance = 0; // private variable

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // ✅ 500
// account.#balance; ❌ Error - Cannot access private field

// ==========================================================
// 🔹 3. INHERITANCE - Reuse Code with Parent-Child Relationship
// ==========================================================

/*
Inheritance allows one class (child) to inherit properties and methods from another (parent).

Real-life example: A child inherits traits from parents.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Dog inherits from Animal
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks 🐶`);
  }
}

const dog = new Dog("Max");
dog.speak(); // Output: Max barks 🐶

// ==========================================================
// 🔹 4. POLYMORPHISM - Same Method, Different Behavior
// ==========================================================

/*
Polymorphism = same method name, different implementations.

Real-life example: The word "run"
- A person runs 🏃
- A machine runs ⚙️
- A show runs on TV 📺
*/

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows 🐱`);
  }
}

const animals = [new Dog("Rocky"), new Cat("Kitty"), new Animal("Some animal")];
animals.forEach(animal => animal.speak());
// Output:
// Rocky barks 🐶
// Kitty meows 🐱
// Some animal makes a sound

// ==========================================================
// 🔹 6. ARROW FUNCTION vs METHOD IN CLASS
// ==========================================================

/*
Arrow functions:
- Preserve the 'this' context (lexical scope)
- Commonly used in React or event handlers

Method in class:
- Defined without 'function' keyword
- Uses class instance's 'this' normally
*/

class Person {
  name = "Ali";

  normalMethod() {
    console.log("Normal method:", this.name); //  works
  }

  arrowMethod = () => {
    console.log("Arrow method:", this.name); //  works and auto binds 'this'
  }
}

const p = new Person();
p.normalMethod();
p.arrowMethod();

// ==========================================================
// 🔹 SUMMARY TABLE (OOP in JS)
// ==========================================================

/*
| Concept        | Meaning                          | Real-Life Example        |
|----------------|-----------------------------------|---------------------------|
| Abstraction     | Hide inner details               | TV remote                |
| Encapsulation   | Protect data                     | Medicine capsule         |
| Inheritance     | Child uses parent features       | Father ➡ Son             |
| Polymorphism    | Same method, different action    | "Run" (man/machine/show) |
*/

// ==========================================================
//  When to Use OOP in JavaScript
// ==========================================================

/*
- Building reusable components
- Game development (player, enemies)
- UI components (like buttons, modals)
- Data models in backend code (e.g. User, Product, Order)
*/
