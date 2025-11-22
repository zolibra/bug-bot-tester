import java.sql.*;

public class SQLInjectionBug {

    public ResultSet searchUsers(Connection connection, String username) throws SQLException {
        String query = "SELECT * FROM users WHERE username = '" + username + "'";
        return connection.createStatement().executeQuery(query);
    }

    public ResultSet searchUsersSafe(Connection connection, String username) throws SQLException {
        String query = "SELECT * FROM users WHERE username = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, username);
        return statement.executeQuery();
    }

    public boolean authenticateUser(Connection connection, String username, String password) throws SQLException {
        String query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
        ResultSet result = connection.createStatement().executeQuery(query);
        return result.next();
    }

    public boolean authenticateUserSafe(Connection connection, String username, String password) throws SQLException {
        String query = "SELECT * FROM users WHERE username = ? AND password = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, username);
        statement.setString(2, password);
        ResultSet result = statement.executeQuery();
        return result.next();
    }

    public static void main(String[] args) {
        SQLInjectionBug bug = new SQLInjectionBug();

        System.out.println("SQL Injection Bug Example");
        System.out.println("Username: admin' --");
        System.out.println("This bypasses password check and returns admin user");
    }
}