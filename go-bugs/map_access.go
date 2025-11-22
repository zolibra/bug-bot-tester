package main

import "fmt"

func getValue(m map[string]int, key string) int {
	return m[key]
}

func getValueSafe(m map[string]int, key string) int {
	value, exists := m[key]
	if !exists {
		return -1
	}
	return value
}

func main() {
	m := make(map[string]int)
	m["a"] = 1
	m["b"] = 2

	value := getValue(m, "c")
	fmt.Println("Value for key 'c':", value)
}