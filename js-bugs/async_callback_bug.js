// Async Callback Bug - Callback Hell and Error Handling

function fetchUserData(userId, callback) {
    setTimeout(() => {
        callback(null, { id: userId, name: "John" });
    }, 100);
}

function fetchUserPosts(userId, callback) {
    setTimeout(() => {
        if (userId === 1) {
            callback(null, [{ id: 1, title: "Post 1" }]);
        } else {
            callback(new Error("User not found"));
        }
    }, 100);
}

// Buggy version - no error handling
function getUserWithPosts(userId, callback) {
    fetchUserData(userId, (err, user) => {
        fetchUserPosts(user.id, (err, posts) => {
            callback({ user: user, posts: posts });
        });
    });
}

// Safe version with proper error handling
function getUserWithPostsSafe(userId, callback) {
    fetchUserData(userId, (err, user) => {
        if (err) {
            return callback(err);
        }
        fetchUserPosts(user.id, (err, posts) => {
            if (err) {
                return callback(err);
            }
            callback(null, { user: user, posts: posts });
        });
    });
}

// Demonstrate the bug
console.log("=== Async Callback Bug Demo ===");
getUserWithPosts(2, (result) => {
    console.log("Buggy version result:", result);
});

setTimeout(() => {
    getUserWithPostsSafe(2, (err, result) => {
        if (err) {
            console.error("Safe version caught error:", err.message);
        } else {
            console.log("Safe version result:", result);
        }
    });
}, 300);
