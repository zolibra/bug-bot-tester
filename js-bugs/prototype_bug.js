// Prototype Chain Bug

function Animal(name) {
    this.name = name;
    this.friends = []; // Bug: should be on prototype or properly initialized
}

Animal.prototype.addFriend = function(friend) {
    this.friends.push(friend);
};

// Safe version
function AnimalSafe(name) {
    this.name = name;
    this.friends = []; // Each instance gets its own array
}

AnimalSafe.prototype.addFriend = function(friend) {
    this.friends.push(friend);
};

// Demonstrate another common prototype bug
function Person() {
    this.hobbies = [];
}

Person.prototype.hobbies = []; // Bug: shared across all instances

function PersonSafe() {
    this.hobbies = []; // Safe: each instance gets its own array
}

// Demonstrate the bug
console.log("=== Prototype Bug Demo ===");

// Bug with shared array on prototype
const person1 = new Person();
const person2 = new Person();

// This affects Person.prototype.hobbies if instance doesn't have own property
delete person1.hobbies; // Remove own property
delete person2.hobbies; // Remove own property

person1.hobbies.push("reading");
person2.hobbies.push("gaming");

console.log("Person1 hobbies (buggy):", person1.hobbies); // Both will have both hobbies
console.log("Person2 hobbies (buggy):", person2.hobbies); // Both will have both hobbies

// Safe version
const safePerson1 = new PersonSafe();
const safePerson2 = new PersonSafe();

safePerson1.hobbies.push("reading");
safePerson2.hobbies.push("gaming");

console.log("SafePerson1 hobbies:", safePerson1.hobbies);
console.log("SafePerson2 hobbies:", safePerson2.hobbies);
