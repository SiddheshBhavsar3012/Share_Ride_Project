package com.hcl.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Vehicle {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer vehicleId;
	@Column
	String  vehicleName;
	@Column
	String vehicleNo;
	@Column
	String type;	//2 wheeler and 4 wheeler
	@Column
	Integer rating;
	@Column
	Long price;  
	@Column
	Integer capacity;
	@Column
	Integer ownerId;
	@Column
	String image;
	public Vehicle(String vehicleName, String vehicleNo, String type, Integer rating, Long price, Integer capacity,
			Integer ownerId,String image) {
		super();
		this.vehicleName = vehicleName;
		this.vehicleNo = vehicleNo;
		this.type = type;
		this.rating = rating;
		this.price = price;
		this.capacity = capacity;
		this.ownerId = ownerId;
		this.image=image;
	}

}
