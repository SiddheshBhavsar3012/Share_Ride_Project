package com.hcl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.User;


@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	public List<User> getUserByUserNameAndPassword(String usernam,String password);
	public List<User> getUserByType(String type);

}
