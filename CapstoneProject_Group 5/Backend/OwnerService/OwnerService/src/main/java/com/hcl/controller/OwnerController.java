package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.dto.OwnerDto;
import com.hcl.pojo.Owner;
import com.hcl.service.OwnerService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/owner") //http://localhost:8082/owner
public class OwnerController {

	@Autowired
	OwnerService ownerService;
	//http://localhost:8082/owner/add
	@PostMapping("/register")
	public Owner registerOwner(@RequestBody Owner owner) {
		System.out.println(owner.toString());
		return ownerService.addNewOwner(owner);
	}
	//http://localhost:8082/owner/login
	@PostMapping("/login")
	public Owner loginOwner(@RequestBody OwnerDto ownerDto) {
		return ownerService.checkOwnerDetails(ownerDto);
	}
	//http://localhost:8082/owner/getAll
	@GetMapping("/getAll")
	public List<Owner> getAllOwners(){
		return ownerService.getAllOwners();
	}
	//http://localhost:8082/owner/getById/1
	@GetMapping("/getById/{id}")
	public Owner getOwnerById(@PathVariable Integer id) {
		return ownerService.getOwnerById(id);
	}
	//http://localhost:8082/owner/update
	@PutMapping("/update")
	public Owner updateOwner(@RequestBody Owner owner) {
		return ownerService.updateOwner(owner);
	}

}
