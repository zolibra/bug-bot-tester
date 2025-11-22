public class IntegerOverflowBug {

    public int calculateSquare(int number) {
        return number * number;
    }

    public int calculateSquareSafe(int number) {
        long result = (long) number * number;
        if (result >= Integer.MAX_VALUE) {
            throw new ArithmeticException("Integer overflow detected");
        }
        return (int) result;
    }

    public int factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Factorial of negative number");
        }
        int result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public int factorialSafe(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Factorial of negative number");
        }
        if (n > 12) {
            throw new ArithmeticException("Factorial too large for int");
        }
        int result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public static void main(String[] args) {
        IntegerOverflowBug bug = new IntegerOverflowBug();

        try {
            int maxInt = Integer.MAX_VALUE / 2 + 10000;
            System.out.println("Calculating square of " + maxInt);
            int result = bug.calculateSquare(maxInt);
            System.out.println("Result: " + result + " (overflowed!)");
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }

        try {
            System.out.println("Calculating factorial(20)");
            result = bug.factorial(20);
            System.out.println("Result: " + result);
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}