public class RecursiveInfiniteLoopBug {

    public int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public int fibonacciMemoized(int n) {
        return fibonacciMemoized(n, new int[n + 1]);
    }

    public int fibonacciMemoized(int n, int[] memo) {
        if (n <= 1) {
            return n;
        }
        if (memo[n] != 0) {
            return memo[n];
        }
        memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
        return memo[n];
    }

    public int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        RecursiveInfiniteLoopBug bug = new RecursiveInfiniteLoopBug();

        try {
            System.out.println("Calculating fibonacci(35) - this will be very slow due to exponential time complexity");
            long startTime = System.currentTimeMillis();
            int result = bug.fibonacci(35);
            long endTime = System.currentTimeMillis();
            System.out.println("Result: " + result);
            System.out.println("Time taken: " + (endTime - startTime) + "ms");
        } catch (StackOverflowError e) {
            System.err.println("StackOverflowError occurred");
        }

        System.out.println("Try fibonacciMemoized(35) for better performance");
    }
}