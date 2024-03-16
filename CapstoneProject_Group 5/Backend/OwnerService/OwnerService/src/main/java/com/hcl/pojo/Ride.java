package com.hcl.pojo;

import java.time.LocalDateTime;

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
//@AllArgsConstructor
@Table
@Entity
public class Ride {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Ride_Id")
	Integer rideId;
	@Column
	Integer ownerId;
	@Column(name = "local_date_time", columnDefinition = "TIMESTAMP")
	LocalDateTime dateTime;
	@Column
	String pickupPoint;
	@Column
	String dropPoint;
	@Column
	Long distance;
	@Column
	Double price;
	@Column
	Integer capacity;
	@Column
	Integer vehicleId;
	String type; 	//rent or share
	String dateString;
	public Ride(Integer ownerId, LocalDateTime dateTime, String pickupPoint, String dropPoint, Long distance,
			Double price, Integer capacity, Integer vehicleId, String type) {
		super();
		this.ownerId = ownerId;
		this.dateTime = dateTime;
		this.pickupPoint = pickupPoint;
		this.dropPoint = dropPoint;
		this.distance = distance;
		this.price = price;
		this.capacity = capacity;
		this.vehicleId = vehicleId;
		this.type = type;
	}

}
