package main

import (
	"fmt"
	"time"
)

func process(ch chan string) {
	for {
		data := <-ch
		fmt.Println("Processing:", data)
		time.Sleep(100 * time.Millisecond)
	}
}

func main() {
	ch := make(chan string)

	go process(ch)

	for i := 0; i < 5; i++ {
		ch <- fmt.Sprintf("Message %d", i)
	}

	fmt.Println("Main function completed, but goroutine is still running")
}