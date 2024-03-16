package com.hcl.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class LocationDistance {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer lDistanceId;
	String pickupLocation;
	String dropLocation;
	Integer distance;
	public LocationDistance(String pickupLocation, String dropLocation,Integer distance) {
		super();
		this.pickupLocation = pickupLocation;
		this.dropLocation = dropLocation;
		this.distance=distance;
	}

}
