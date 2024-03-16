package com.hcl.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Owner")
public class Owner {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer ownerId;
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
	String type;	// owner
	public Owner(String fName, String lName, String userName, Long contactNo, String password, String type) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.userName = userName;
		this.contactNo = contactNo;
		this.password = password;
		this.type="owner";
	}
}
