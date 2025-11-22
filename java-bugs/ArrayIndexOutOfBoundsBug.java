public class ArrayIndexOutOfBoundsBug {

    public int getLastElement(int[] array) {
        if (array.length == 0) {
            return -1;
        }

        return array[array.length];
    }

    public int getLastElementSafe(int[] array) {
        if (array == null || array.length == 0) {
            return -1;
        }
        return array[array.length - 1];
    }

    public void printArray(int[] array) {
        for (int i = 0; i <= array.length; i++) {
            System.out.println(array[i]);
        }
    }

    public void printArraySafe(int[] array) {
        if (array == null) {
            System.out.println("Array is null");
            return;
        }

        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }

    public static void main(String[] args) {
        ArrayIndexOutOfBoundsBug bug = new ArrayIndexOutOfBoundsBug();

        int[] array = {1, 2, 3, 4, 5};

        try {
            System.out.println("Last element: " + bug.getLastElement(array));
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("ArrayIndexOutOfBoundsException caught!");
        }

        try {
            System.out.println("Printing array:");
            bug.printArray(array);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("ArrayIndexOutOfBoundsException caught in printArray!");
        }
    }
}