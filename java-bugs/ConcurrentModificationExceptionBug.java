import java.util.ArrayList;
import java.util.List;

public class ConcurrentModificationExceptionBug {

    public void processAndRemoveEvenNumbers(List<Integer> numbers) {
        for (Integer num : numbers) {
            if (num % 2 == 0) {
                numbers.remove(num);
            }
        }
    }

    public void correctProcessAndRemoveEvenNumbers(List<Integer> numbers) {
        numbers.removeIf(num -> num % 2 == 0);
    }

    public static void main(String[] args) {
        ConcurrentModificationExceptionBug bug = new ConcurrentModificationExceptionBug();
        List<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);

        try {
            bug.processAndRemoveEvenNumbers(numbers);
        } catch (Exception e) {
            System.err.println("Caught exception: " + e.getClass().getSimpleName());
        }
    }
}