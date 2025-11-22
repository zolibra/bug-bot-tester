package main

import (
	"fmt"
	"sync"
	"time"
)

type Counter struct {
	value int
}

func (c *Counter) Increment() {
	c.value++
}

func (c *Counter) GetValue() int {
	return c.value
}

func (c *Counter) IncrementSafe() {
	c.value++
}

func main() {
	counter := &Counter{}
	var wg sync.WaitGroup

	for i := 0; i < 1000; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			counter.Increment()
		}()
	}

	wg.Wait()
	fmt.Printf("Expected: 1000, Got: %d\n", counter.GetValue())
}