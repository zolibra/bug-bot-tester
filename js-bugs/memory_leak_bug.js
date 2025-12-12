// Memory Leak Bug - Event Listeners

class ChatRoom {
    constructor() {
        this.messages = [];
        this.listeners = [];
    }

    // Buggy version - doesn't clean up event listeners
    subscribeToMessages(callback) {
        this.listeners.push(callback);
    }

    addMessage(message) {
        this.messages.push(message);
        this.listeners.forEach(listener => listener(message));
    }
}

class ChatRoomSafe {
    constructor() {
        this.messages = [];
        this.listeners = [];
    }

    subscribeToMessages(callback) {
        this.listeners.push(callback);
        // Return unsubscribe function
        return () => {
            const index = this.listeners.indexOf(callback);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        };
    }

    addMessage(message) {
        this.messages.push(message);
        this.listeners.forEach(listener => listener(message));
    }
}

// Demonstrate the bug
console.log("=== Memory Leak Bug Demo ===");

const buggyRoom = new ChatRoom();
console.log("Initial listeners count:", buggyRoom.listeners.length);

// Simulate creating and destroying many listeners
for (let i = 0; i < 100; i++) {
    const callback = (msg) => console.log(`Listener ${i}: ${msg}`);
    buggyRoom.subscribeToMessages(callback);
}

console.log("After adding 100 listeners (buggy):", buggyRoom.listeners.length);
// Bug: No way to remove listeners, they accumulate causing memory leak

const safeRoom = new ChatRoomSafe();
console.log("\nInitial listeners count (safe):", safeRoom.listeners.length);

const unsubscribers = [];
for (let i = 0; i < 100; i++) {
    const callback = (msg) => console.log(`Listener ${i}: ${msg}`);
    const unsubscribe = safeRoom.subscribeToMessages(callback);
    unsubscribers.push(unsubscribe);
}

console.log("After adding 100 listeners (safe):", safeRoom.listeners.length);

// Clean up listeners
unsubscribers.forEach(unsub => unsub());
console.log("After unsubscribing all (safe):", safeRoom.listeners.length);
