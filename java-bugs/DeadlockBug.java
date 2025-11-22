public class DeadlockBug {

    private final Object lock1 = new Object();
    private final Object lock2 = new Object();

    public void method1() {
        synchronized (lock1) {
            System.out.println("Method1: Acquired lock1");
            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            synchronized (lock2) {
                System.out.println("Method1: Acquired lock2");
            }
        }
    }

    public void method2() {
        synchronized (lock2) {
            System.out.println("Method2: Acquired lock2");
            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            synchronized (lock1) {
                System.out.println("Method2: Acquired lock1");
            }
        }
    }

    public static void main(String[] args) {
        DeadlockBug bug = new DeadlockBug();

        Thread thread1 = new Thread(bug::method1);
        Thread thread2 = new Thread(bug::method2);

        thread1.start();
        thread2.start();
    }
}