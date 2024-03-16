package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.dto.UserDto;
import com.hcl.exception.UserNotFoundException;
import com.hcl.pojo.User;
import com.hcl.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

	public User checkUserDetails(UserDto udto) //to check the user details
	{
		List<User> listOfUser=userRepository.getUserByUserNameAndPassword(udto.getUsername(), udto.getPassword());
		if(listOfUser.size()>0) {
			return listOfUser.get(0);
		}
		else 
		{
			throw new UserNotFoundException("Inavlid username & password |"+udto.getUsername()+" , "+udto.getPassword());//if data invalid throws exception
		}
	}
	public User registerNewUser(User user) {//as a new user can register
		return userRepository.save(user);
	}

	public User updateUser(User user) {//update the user information
		if(userRepository.existsById(user.getUserId()) ) {//checks where user exist or not
			return 	userRepository.save(user);//if exist it updates data
		}
		System.out.println("User Not update");
		throw new UserNotFoundException("User not exist with ID "+user.getUserId());//if user not found throws an exception
	}
	public List<User> getAllUsers(){//to gets all the users
		return userRepository.getUserByType("user");
	}

	public void deleteUser(Integer userId) {//delete user
		if(userRepository.existsById(userId) ) {//checks whether the user exist or not
			userRepository.deleteById(userId);//if exist deletes the user
			System.out.println("User Deleted");//print statement
			return;
		}
		System.out.println("User not Found to Delete");
		throw new UserNotFoundException("User not Found to Delete with Id ="+userId);//if user not found throws notfound exception
	}
	public User getUserByUserId(Integer id) {//find user based on id
		if(userRepository.existsById(id) ) {//checks id is exist or not
			return userRepository.findById(id).get();//returns the user based on id
		}
		throw new UserNotFoundException("Invali Id "+id);//if user id not matches throws not found exception
	}

}
