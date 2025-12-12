# Bug Tester Project

This project contains a collection of common and challenging code bugs in Java, Go, and JavaScript languages, designed for testing bug detection capabilities of various AI models and static analysis tools.

## Project Structure

```
bug-bot-tester/
├── java-bugs/          # Java bug examples
│   ├── ConcurrentModificationExceptionBug.java
│   ├── NullPointerBug.java
│   ├── MemoryLeakBug.java
│   ├── ThreadSafetyBug.java
│   ├── StringComparisonBug.java
│   ├── ResourceLeakBug.java
│   ├── ArrayIndexOutOfBoundsBug.java
│   ├── DeadlockBug.java
│   ├── IntegerOverflowBug.java
│   ├── SQLInjectionBug.java
│   └── RecursiveInfiniteLoopBug.java
├── go-bugs/            # Go bug examples
│   ├── race_condition.go
│   ├── nil_pointer.go
│   ├── channel_deadlock.go
│   ├── goroutine_leak.go
│   ├── defer_panic.go
│   ├── range_loop_closure.go
│   ├── slice_index.go
│   ├── map_access.go
│   ├── integer_overflow.go
│   └── unsafe_concurrency.go
├── js-bugs/            # JavaScript bug examples
│   ├── null_undefined_bug.js
│   ├── type_coercion_bug.js
│   ├── async_callback_bug.js
│   ├── closure_bug.js
│   ├── this_binding_bug.js
│   ├── prototype_bug.js
│   ├── array_mutation_bug.js
│   ├── memory_leak_bug.js
│   ├── race_condition_bug.js
│   └── injection_bug.js
├── pom.xml            # Maven configuration for Java
├── go.mod             # Go module definition
├── package.json       # Node.js package configuration
└── README.md          # This file
```

## Java Bug Examples

The Java directory contains 10 common and challenging bugs:

1. **ConcurrentModificationExceptionBug**: Concurrent modification during iteration
2. **NullPointerBug**: NullPointerException from missing null checks
3. **MemoryLeakBug**: Static collection causing memory leaks
4. **ThreadSafetyBug**: Race conditions with shared mutable state
5. **StringComparisonBug**: Using == instead of equals() for string comparison
6. **ResourceLeakBug**: File handle leaks from missing resource cleanup
7. **ArrayIndexOutOfBoundsBug**: Array index out of bounds errors
8. **DeadlockBug**: Thread deadlock scenarios
9. **IntegerOverflowBug**: Integer overflow in mathematical operations
10. **SQLInjectionBug**: SQL injection vulnerabilities
11. **RecursiveInfiniteLoopBug**: Performance issues with recursive algorithms

### Running Java Examples

```bash
# Compile Java files
javac -d bin java-bugs/*.java

# Run individual examples
java -cp bin ConcurrentModificationExceptionBug
java -cp bin NullPointerBug
# ... etc
```

## Go Bug Examples

The Go directory contains 10 common concurrency and memory-related bugs:

1. **race_condition**: Data races in concurrent operations
2. **nil_pointer**: Nil pointer dereference
3. **channel_deadlock**: Channel deadlock scenarios
4. **goroutine_leak**: Goroutine leaks from unblocked channels
5. **defer_panic**: Improper defer usage causing panics
6. **range_loop_closure**: Closure capture issues in range loops
7. **slice_index**: Slice index out of bounds
8. **map_access**: Unsafe map access patterns
9. **integer_overflow**: Integer overflow in calculations
10. **unsafe_concurrency**: Unsafe shared data access in concurrent code

### Running Go Examples

```bash
# Run individual examples
go run go-bugs/race_condition.go
go run go-bugs/nil_pointer.go
# ... etc

# Build and run
cd go-bugs
go build race_condition.go
./race_condition
```

## JavaScript Bug Examples

The JavaScript directory contains 10 common and challenging bugs:

1. **null_undefined_bug**: Null and undefined reference errors
2. **type_coercion_bug**: Type coercion and comparison issues
3. **async_callback_bug**: Callback hell and async error handling
4. **closure_bug**: Closure variable capture issues in loops
5. **this_binding_bug**: Context binding problems with `this`
6. **prototype_bug**: Prototype chain and shared property issues
7. **array_mutation_bug**: Array mutation during iteration
8. **memory_leak_bug**: Event listener memory leaks
9. **race_condition_bug**: Race conditions with Promises and async code
10. **injection_bug**: XSS and SQL injection vulnerabilities

### Running JavaScript Examples

```bash
# Run individual examples using npm scripts
npm run run:null
npm run run:type
npm run run:async
# ... etc

# Or run directly with node
node js-bugs/null_undefined_bug.js
node js-bugs/type_coercion_bug.js
# ... etc
```

## Testing Methodology

This project is designed to test:

1. **AI Model Bug Detection**: How well AI models can identify and explain bugs
2. **Static Analysis Tools**: Effectiveness of automated code analysis tools
3. **Code Review Skills**: Human ability to spot subtle bugs in code
4. **Language-Specific Issues**: Bug patterns unique to Java, Go, and JavaScript

## Contributing

When using this project for testing:

1. Each file contains both buggy code and correct implementations
2. Run the examples to observe the bugs in action
3. Use the code to create pull requests with intentional bugs for testing
4. Document which tool/model found which bugs and how accurately

## License

This project is intended for educational and testing purposes.