package main

import "fmt"

func getLastElement(slice []int) int {
	if len(slice) == 0 {
		return -1
	}
	return slice[len(slice)]
}

func getElements(slice []int, start, end int) []int {
	return slice[start:end]
}

func main() {
	slice := []int{1, 2, 3, 4, 5}

	last := getLastElement(slice)
	fmt.Println("Last element:", last)

	subset := getElements(slice, 3, 10)
	fmt.Println("Subset:", subset)
}