// This Binding Bug

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    getCount() {
        return this.count;
    }

    incrementSafe = () => {
        this.count++;
    }
}

// Demonstrate the bug
console.log("=== This Binding Bug Demo ===");
const counter = new Counter();

// Direct call works fine
counter.increment();
console.log("After direct call:", counter.getCount());

// Bug: this binding is lost when method is extracted
const incrementFn = counter.increment;
try {
    incrementFn(); // This will cause an error or increment undefined
    console.log("After extracted call:", counter.getCount());
} catch (error) {
    console.error("Error with buggy version:", error.message);
}

// Safe version using arrow function
const incrementSafeFn = counter.incrementSafe;
incrementSafeFn();
console.log("After safe extracted call:", counter.getCount());

// Alternative: using bind
const incrementBound = counter.increment.bind(counter);
incrementBound();
console.log("After bound call:", counter.getCount());
