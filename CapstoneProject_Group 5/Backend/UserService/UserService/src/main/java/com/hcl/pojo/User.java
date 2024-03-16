package com.hcl.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data//to set getters and setters
@NoArgsConstructor//constructor using fields
@Table(name="User")//table creation
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer userId;
	@Column
	String fName;
	@Column
	String lName;
	@Column(unique = true)
	String userName;
	@Column 
	Long contactNo;
	@Column
	String password;
	@Column
	String type;	//user or owner
	public User(String fName, String lName, String userName, Long contactNo, String password, String type) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.userName = userName;
		this.contactNo = contactNo;
		this.password = password;
		this.type = type;
	}



}
