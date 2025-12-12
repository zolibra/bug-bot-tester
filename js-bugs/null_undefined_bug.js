// Null and Undefined Reference Bug

function getUserName(user) {
    return user.name.toUpperCase();
}

function getUserNameSafe(user) {
    if (!user || !user.name) {
        return "UNKNOWN";
    }
    return user.name.toUpperCase();
}

// Demonstrate the bug
console.log("=== Null/Undefined Bug Demo ===");
try {
    const result = getUserName(null);
    console.log("Result:", result);
} catch (error) {
    console.error("Error caught:", error.message);
}

// Demonstrate the safe version
const safeResult = getUserNameSafe(null);
console.log("Safe result:", safeResult);
