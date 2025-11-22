import java.io.*;

public class ResourceLeakBug {

    public String readFile(String filename) throws IOException {
        FileInputStream fis = new FileInputStream(filename);
        BufferedReader reader = new BufferedReader(new InputStreamReader(fis));

        StringBuilder content = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            content.append(line).append("\n");
        }

        return content.toString();
    }

    public String readFileSafe(String filename) throws IOException {
        StringBuilder content = new StringBuilder();

        try (FileInputStream fis = new FileInputStream(filename);
             BufferedReader reader = new BufferedReader(new InputStreamReader(fis))) {

            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append("\n");
            }
        }

        return content.toString();
    }

    public static void main(String[] args) {
        ResourceLeakBug bug = new ResourceLeakBug();

        try {
            File testFile = new File("test.txt");
            testFile.createNewFile();

            for (int i = 0; i < 10; i++) {
                try {
                    bug.readFile("test.txt");
                } catch (IOException e) {
                    System.err.println("Error reading file: " + e.getMessage());
                }
            }

            System.out.println("Resource leak test completed - files may not be closed properly");
            testFile.delete();
        } catch (IOException e) {
            System.err.println("Error creating test file: " + e.getMessage());
        }
    }
}