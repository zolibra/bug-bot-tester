// Type Coercion Bug

function isValidNumber(value) {
    if (value == 0) {
        return false;
    }
    return true;
}

function isValidNumberSafe(value) {
    if (value === 0) {
        return false;
    }
    return value !== null && value !== undefined && value !== '';
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
