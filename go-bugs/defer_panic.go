package main

import "fmt"

func processFile() {
	file := nil
	file.Close()
}

func riskyOperation() {
	defer recover()
	panic("Something went wrong")
}

func safeOperation() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recovered from:", r)
		}
	}()
}

func main() {
	processFile()
	riskyOperation()
}