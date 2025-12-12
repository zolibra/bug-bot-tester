// Race Condition Bug with Promises

let cachedData = null;

// Buggy version - multiple simultaneous calls can cause race condition
async function fetchData(url) {
    if (cachedData) {
        return cachedData;
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    cachedData = { data: "Data from " + url, timestamp: Date.now() };
    return cachedData;
}

// Safe version using promise caching
let cachedDataSafe = null;
let fetchPromise = null;

async function fetchDataSafe(url) {
    if (cachedDataSafe) {
        return cachedDataSafe;
    }
    
    // If fetch is already in progress, return the same promise
    if (fetchPromise) {
        return fetchPromise;
    }
    
    fetchPromise = (async () => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 100));
        cachedDataSafe = { data: "Data from " + url, timestamp: Date.now() };
        return cachedDataSafe;
    })();
    
    try {
        return await fetchPromise;
    } finally {
        fetchPromise = null;
    }
}

// Demonstrate the bug
console.log("=== Race Condition Bug Demo ===");

async function testBuggyVersion() {
    console.log("\nBuggy version - multiple simultaneous calls:");
    cachedData = null;
    
    const promises = [
        fetchData("api/endpoint1"),
        fetchData("api/endpoint2"),
        fetchData("api/endpoint3")
    ];
    
    const results = await Promise.all(promises);
    console.log("Results might be inconsistent:", results.map(r => r.data));
}

async function testSafeVersion() {
    console.log("\nSafe version - multiple simultaneous calls:");
    cachedDataSafe = null;
    fetchPromise = null;
    
    const promises = [
        fetchDataSafe("api/endpoint1"),
        fetchDataSafe("api/endpoint2"),
        fetchDataSafe("api/endpoint3")
    ];
    
    const results = await Promise.all(promises);
    console.log("Results are consistent:", results.map(r => r.data));
}

testBuggyVersion().then(() => testSafeVersion());
