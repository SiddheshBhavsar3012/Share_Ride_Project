package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.dto.OwnerDto;
import com.hcl.exception.OwnerNotFoundException;
import com.hcl.pojo.Owner;

import com.hcl.repository.OwnerRepository;


@Service

public class OwnerService {

	@Autowired
	OwnerRepository ownerRepository;
	public Owner checkOwnerDetails(OwnerDto udto) {
		List<Owner> listOfOwner=ownerRepository.getOwnerByUserNameAndPassword(udto.getUsername(), udto.getPassword());
		if(listOfOwner.size()>0) {
			return listOfOwner.get(0);
		}
		else {
			throw new OwnerNotFoundException("Invalid username | password :"+udto.getUsername()+", "+udto.getPassword());
		}
	}

	//to add new Owner
	public Owner addNewOwner(Owner owner) {
		return ownerRepository.save(owner);
	}

	//to delete owner based on Id

	public void deleteOwnerById(Integer id) {
		if(ownerRepository.existsById(id)){
			ownerRepository.deleteById(id);	
		}
		else {
			System.out.println("Invalid Id");
			throw new OwnerNotFoundException("Invalid Id : "+id);
		}	
	}

	//to get all owners

	public List<Owner> getAllOwners() {
		// TODO Auto-generated method stub
		return ownerRepository.findAll();
	}

	//to get owner details based on OwnerId

	public Owner getOwnerById(Integer id) {
		if(ownerRepository.existsById(id)){
			return ownerRepository.findById(id).get();	
		}
		else {
			System.out.println("Invalid Id");

			throw new OwnerNotFoundException("Invalid Id "+id); 
		}
	}

	//to update owner

	public Owner updateOwner(Owner owner) {
		if(ownerRepository.existsById(owner.getOwnerId())){
			return ownerRepository.save(owner);	
		}
		else {
			System.out.println("Invalid Id");
			throw new OwnerNotFoundException("Invalid Id "+owner.getOwnerId());
		}
	}

}
