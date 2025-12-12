// Closure Variable Capture Bug

function createFunctionsBuggy() {
    const functions = [];
    for (var i = 0; i < 5; i++) {
        functions.push(function() {
            return i;
        });
    }
    return functions;
}

function createFunctionsSafe() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            return i;
        });
    }
    return functions;
}

// Alternative safe version using IIFE
function createFunctionsSafeIIFE() {
    const functions = [];
    for (var i = 0; i < 5; i++) {
        functions.push((function(index) {
            return function() {
                return index;
            };
        })(i));
    }
    return functions;
}

// Demonstrate the bug
console.log("=== Closure Bug Demo ===");
const buggyFunctions = createFunctionsBuggy();
console.log("Buggy version (all return 5):");
buggyFunctions.forEach((fn, index) => {
    console.log(`Function ${index} returns:`, fn());
});

const safeFunctions = createFunctionsSafe();
console.log("\nSafe version (returns 0-4):");
safeFunctions.forEach((fn, index) => {
    console.log(`Function ${index} returns:`, fn());
});
