public class ThreadSafetyBug {

    private int counter = 0;

    public void increment() {
        counter++;
    }

    public int getCounter() {
        return counter;
    }

    public synchronized void incrementSafe() {
        counter++;
    }

    public static void main(String[] args) throws InterruptedException {
        ThreadSafetyBug bug = new ThreadSafetyBug();

        Runnable task = () -> {
            for (int i = 0; i < 10000; i++) {
                bug.increment();
            }
        };

        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);

        thread1.start();
        thread2.start();

        thread1.join();
        thread2.join();

        System.out.println("Final counter: " + bug.getCounter());
        System.out.println("Expected: 20000, Actual: " + bug.getCounter());
        System.out.println("Is the result correct? " + (bug.getCounter() == 20000));
    }
}