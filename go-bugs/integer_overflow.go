package main

import "fmt"

func calculateSquare(n int) int {
	return n * n
}

func factorial(n int) int {
	if n < 0 {
		panic("negative factorial")
	}
	if n == 0 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	n := 1 << 30
	result := calculateSquare(n)
	fmt.Println("Square of large number:", result)

	fmt.Println("Factorial of 20:", factorial(20))
}