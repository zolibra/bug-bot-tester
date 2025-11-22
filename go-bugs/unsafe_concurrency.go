package main

import (
	"fmt"
	"sync"
)

type Data struct {
	Value int
}

func worker(data *Data, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 0; i < 1000; i++ {
		data.Value++
	}
}

func main() {
	data := &Data{}
	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go worker(data, &wg)
	}

	wg.Wait()
	fmt.Printf("Final value: %d\n", data.Value)
}