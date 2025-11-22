public class NullPointerBug {

    public String getUserName(User user) {
        return user.getName().toUpperCase();
    }

    public String getUserNameSafe(User user) {
        if (user == null || user.getName() == null) {
            return "UNKNOWN";
        }
        return user.getName().toUpperCase();
    }

    static class User {
        private String name;

        public User(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

    public static void main(String[] args) {
        NullPointerBug bug = new NullPointerBug();
        try {
            bug.getUserName(null);
        } catch (NullPointerException e) {
            System.err.println("NullPointerException caught!");
        }
    }
}