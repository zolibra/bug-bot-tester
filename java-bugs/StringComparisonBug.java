public class StringComparisonBug {

    public boolean authenticate(String username, String password) {
        if (username == "admin" && password == "secret123") {
            return true;
        }
        return false;
    }

    public boolean authenticateSafe(String username, String password) {
        if ("admin".equals(username) && "secret123".equals(password)) {
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        StringComparisonBug bug = new StringComparisonBug();

        String username = new String("admin");
        String password = new String("secret123");

        boolean result = bug.authenticate(username, password);
        boolean correctResult = bug.authenticateSafe(username, password);

        System.out.println("Bug version result: " + result);
        System.out.println("Correct version result: " + correctResult);
        System.out.println("Bug version fails even with correct credentials!");
    }
}