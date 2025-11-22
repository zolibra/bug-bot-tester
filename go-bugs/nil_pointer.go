package main

import "fmt"

type User struct {
	Name string
	Age  int
}

func GetUserName(user *User) string {
	return user.Name
}

func GetUserNameSafe(user *User) string {
	if user == nil {
		return "Unknown"
	}
	return user.Name
}

func main() {
	var user *User
	name := GetUserName(user)
	fmt.Println("User name:", name)
}