// Array Mutation During Iteration Bug

function removeEvens(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            numbers.splice(i, 1); // Bug: mutating array during iteration
        }
    }
    return numbers;
}

function removeEvensSafe(numbers) {
    // Create a new array instead of mutating the original
    return numbers.filter(num => num % 2 !== 0);
}

function removeEvensSafeInPlace(numbers) {
    // Safe in-place mutation by iterating backwards
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            numbers.splice(i, 1);
        }
    }
    return numbers;
}

// Demonstrate the bug
console.log("=== Array Mutation Bug Demo ===");

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original array:", [...numbers1]);
const result1 = removeEvens([...numbers1]);
console.log("Buggy version result:", result1); // Some evens might remain

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const result2 = removeEvensSafe(numbers2);
console.log("Safe version result:", result2);
console.log("Original array unchanged:", numbers2);

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8];
const result3 = removeEvensSafeInPlace(numbers3);
console.log("Safe in-place version result:", result3);
