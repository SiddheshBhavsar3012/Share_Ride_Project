package com.hcl.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class User {

	Integer userId;

	String fName;

	String lName;

	String userName;

	Long contactNo;

	String password;

	String type;	//user or owner
	public User(String fName, String lName, String userName, Long contactNo, String password, String type) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.userName = userName;
		this.contactNo = contactNo;
		this.password = password;
		this.type ="user";
	}
}