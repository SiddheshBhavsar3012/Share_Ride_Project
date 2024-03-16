package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.dto.UserDto;
import com.hcl.pojo.User;
import com.hcl.service.UserService;
@CrossOrigin(origins = "*")
@RestController //@Controller+@ResponseBody
@RequestMapping("/user")//http://localhost:8083/user
public class UserController {

	@Autowired
	UserService userService;
	//http://localhost:8083/user/login
	@PostMapping("/login")
	public User login(@RequestBody UserDto userdto) {
		//System.out.println(UserDto);
		return userService.checkUserDetails(userdto);
	}
	//http://localhost:8083/user/users
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	//http://localhost:8083/user/register

	@PostMapping("/register")
	public User addUser(@RequestBody User user) {

		return userService.registerNewUser(user);
	}
	//http://localhost:8083/user/update
	@PutMapping("/update")
	public User updateUserdetails(@RequestBody User user) {
		return userService.updateUser(user);
	}

	//http://localhost:8083/user/delete/{id}
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		userService.deleteUser(id);
	}
	//http://localhost:8083/user/getById/{id}
	@GetMapping("/getById/{id}")
	public User getUserById(@PathVariable Integer id) {
		return userService.getUserByUserId(id);
	}
}
