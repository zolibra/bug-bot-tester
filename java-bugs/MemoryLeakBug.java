import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class MemoryLeakBug {

    private static final Map<String, String> cache = new HashMap<>();

    public void addToCache(String data) {
        String key = UUID.randomUUID().toString();
        cache.put(key, data);
    }

    public void addToCacheWithCleanup(String data) {
        if (cache.size() > 1000) {
            cache.clear();
        }
        String key = UUID.randomUUID().toString();
        cache.put(key, data);
    }

    public int getCacheSize() {
        return cache.size();
    }

    public static void main(String[] args) throws InterruptedException {
        MemoryLeakBug bug = new MemoryLeakBug();

        for (int i = 0; i < 100000; i++) {
            bug.addToCache("Data " + i);
            if (i % 1000 == 0) {
                System.out.println("Cache size: " + bug.getCacheSize());
                Thread.sleep(100);
            }
        }
    }
}