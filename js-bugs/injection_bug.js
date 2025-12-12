// XSS and Injection Vulnerability Bug

// Buggy version - vulnerable to XSS
function displayUserComment(comment) {
    const container = `<div class="comment">${comment}</div>`;
    return container;
}

// Safe version - escapes HTML
function displayUserCommentSafe(comment) {
    const escaped = comment
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    const container = `<div class="comment">${escaped}</div>`;
    return container;
}

// SQL Injection example
function buildQuery(username, password) {
    // Bug: vulnerable to SQL injection
    return `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
}

function buildQuerySafe(username, password) {
    // Safe: using parameterized query (示例)
    // In real code, use prepared statements
    const sanitized = {
        username: username.replace(/'/g, "''"),
        password: password.replace(/'/g, "''")
    };
    return {
        query: "SELECT * FROM users WHERE username = ? AND password = ?",
        params: [sanitized.username, sanitized.password]
    };
}

// Demonstrate the bug
console.log("=== Injection Bug Demo ===");

const maliciousComment = "<script>alert('XSS')</script>";
console.log("\nXSS Example:");
console.log("Buggy version:", displayUserComment(maliciousComment));
console.log("Safe version:", displayUserCommentSafe(maliciousComment));

const maliciousUsername = "admin' OR '1'='1";
const password = "anything";
console.log("\nSQL Injection Example:");
console.log("Buggy query:", buildQuery(maliciousUsername, password));
console.log("Safe query:", buildQuerySafe(maliciousUsername, password));
