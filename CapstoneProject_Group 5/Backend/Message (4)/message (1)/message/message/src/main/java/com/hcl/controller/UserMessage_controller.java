package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.pojo.OwnerMessage;
import com.hcl.pojo.UserMessage;
import com.hcl.service.OwnerMessage_service;
import com.hcl.service.UserMessage_service;

@RestController//Controller+RequestBody
@CrossOrigin(origins = "*") //resource sharing only for the specific methods
@RequestMapping("/user")//used to map web req onto specific handler classes and methods
public class UserMessage_controller 
{
	@Autowired
	private UserMessage_service umserv;
	
	//http://localhost:8083/userMessage/send
	@PostMapping("/send")
	public UserMessage addMessage(@RequestBody UserMessage message)
	{
		return umserv.saveMessage(message);
	}
	//http://localhost:8083/userMessage/getall/owner/{id}
	@GetMapping("/getall/owner/{id}")
	public List<UserMessage> getAllUserMessagesByOwner(@PathVariable Integer id)
	{
		return umserv.getAllMessageByReceiverId(id);
	}
	
	//http://localhost:8083/userMessage/delete/byid/{id}
	@DeleteMapping("/delete/byid/{id}")
	public void deleteMsgById(@PathVariable Integer id) {
		umserv.deleteMsgById(id);
	}

	//http://localhost:8083/userMessage/get/owner/{id}
	@GetMapping("/get/owner/{id}")
	public UserMessage getUserMessageByOwner(@PathVariable Integer id) {
		return umserv.getLastMessageByReceiverId(id);
	}


}
