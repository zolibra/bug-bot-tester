package main

import "fmt"

func sendData(ch chan int) {
	ch <- 42
}

func main() {
	ch := make(chan int)

	go sendData(ch)

	data := <-ch
	fmt.Println("Received:", data)
}