import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormatThreadSafetyBug {

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public String formatDate(Date date) {
        return dateFormat.format(date);
    }

    public Date parseDate(String dateString) throws Exception {
        return dateFormat.parse(dateString);
    }

    public String processDateInMultipleThreads(Date date) {
        Runnable task = () -> {
            for (int i = 0; i < 100; i++) {
                String formatted = formatDate(date);
                try {
                    Thread.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };

        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);
        Thread thread3 = new Thread(task);

        thread1.start();
        thread2.start();
        thread3.start();

        try {
            thread1.join();
            thread2.join();
            thread3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return formatDate(date);
    }

    public static void main(String[] args) {
        DateFormatThreadSafetyBug bug = new DateFormatThreadSafetyBug();
        Date now = new Date();

        for (int i = 0; i < 10; i++) {
            try {
                System.out.println("Processing " + i + ": " + bug.processDateInMultipleThreads(now));
            } catch (Exception e) {
                System.err.println("Error in iteration " + i + ": " + e.getMessage());
            }
        }
    }
}