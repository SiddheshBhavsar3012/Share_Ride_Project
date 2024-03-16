package com.hcl.pojo;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingDetails
{
	// These are the attributes used in bookingservice
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer bookingId;
	Integer rideId;
	Integer userId;
	Integer ownerId;
	Integer vehicleId;
	Double price;
	Integer distance;
	String noOfSeats;
	String status;
	String typeRide;   //rent/sharing
	String vehicleType;   //2wheeler/4wheeler
	LocalDate bookingDate;
	public BookingDetails(Integer rideId, Integer userId, Integer ownerId, Integer vehicleId, Double price,
			Integer distance, String noOfSeats, String status, String typeRide, String vehicleType,LocalDate bookingDate) {
		super();
		this.rideId = rideId;
		this.userId = userId;
		this.ownerId = ownerId;
		this.vehicleId = vehicleId;
		this.price = price;
		this.distance = distance;
		this.noOfSeats = noOfSeats;
		this.status = status;
		this.typeRide = typeRide;
		this.bookingDate = bookingDate;
		this.vehicleType=vehicleType;
	}
	
	
}
