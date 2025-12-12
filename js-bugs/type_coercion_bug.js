// Type Coercion Bug

function isValidNumber(value) {
    // Bug: using == causes type coercion issues
    if (value == 0) {
        return false;
    }
    return true;
}

function isValidNumberSafe(value) {
    // Safe: using === for strict comparison and proper validation
    if (typeof value !== 'number') {
        return false;
    }
    return value === 0 || value !== 0; // Returns true for all numbers including 0
}

// Demonstrate the bug
console.log("=== Type Coercion Bug Demo ===");
console.log("isValidNumber(0):", isValidNumber(0));
console.log("isValidNumber(''):", isValidNumber('')); // Bug: returns true
console.log("isValidNumber(null):", isValidNumber(null)); // Bug: returns true
console.log("isValidNumber(undefined):", isValidNumber(undefined)); // Bug: returns true

console.log("\nSafe version:");
console.log("isValidNumberSafe(0):", isValidNumberSafe(0));
console.log("isValidNumberSafe(''):", isValidNumberSafe(''));
console.log("isValidNumberSafe(null):", isValidNumberSafe(null));
console.log("isValidNumberSafe(undefined):", isValidNumberSafe(undefined));
