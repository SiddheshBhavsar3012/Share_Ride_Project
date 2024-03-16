package com.hcl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.Owner;


@Repository
public interface OwnerRepository extends JpaRepository<Owner,Integer> {
	public List<Owner> getOwnerByUserNameAndPassword(String usernam,String password);
	public List<Owner> getOwnerByType(String type);

}
