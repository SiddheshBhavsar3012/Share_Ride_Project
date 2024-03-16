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
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hcl.pojo.OwnerMessage;
import com.hcl.service.OwnerMessage_service;


@RestController //Controller+RequestBody
@CrossOrigin(origins = "*") //resource sharing only for the specific methods
@RequestMapping("/owner")  //used to map web req onto specific handler classes and methods
public class OwnerMessage_controller
{
	@Autowired
	private OwnerMessage_service omserv;
	
	//http://localhost:8083/OwnerMessage/send
	@PostMapping("/send")
	public OwnerMessage addMessage(@RequestBody OwnerMessage message) {
		return omserv.saveMessage(message);
	}
	
	//http://localhost:8083/OwnerMessage/getall/user/{id}
	@GetMapping("/getall/user/{id}")
	public List<OwnerMessage> getAllOwnerMessagesByUser(@PathVariable Integer id){
		return omserv.getAllMessageByReceiverId(id);
	}
	
	//http://localhost:8083/OwnerMessage/get/user/{id}
	@GetMapping("/get/user/{id}")
	public OwnerMessage getOwnerMessageByUser(@PathVariable Integer id) {
		return omserv.getLastMessageByReceiverId(id);
	}
	
	//http://localhost:8083/OwnerMessage/delete/byid/{id}
	@DeleteMapping("/delete/byid/{id}")
	public void deleteMsgById(@PathVariable Integer id) {
		omserv.deleteMsgById(id);
	}
}
