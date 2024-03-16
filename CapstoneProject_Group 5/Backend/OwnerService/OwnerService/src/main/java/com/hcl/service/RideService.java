package com.hcl.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.exception.RideNotFoundException;
import com.hcl.pojo.Ride;
import com.hcl.repository.RideRepository;


@Service
public class RideService {
	@Autowired
	RideRepository rideRepository;

	//to add ride
	public Ride addRide(Ride ride) {
		//LocalDateTime ride.getDateString();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
		LocalDateTime d = LocalDateTime.parse(ride.getDateString(), formatter);
		//LocalDateTime d=LocalDateTime.parse(dateTime);
		ride.setDateTime(d);
		return rideRepository.save(ride);
	}

	//to get all the details of ride

	public List<Ride> getAllRide(){
		return rideRepository.findAll();
	}
	//	public List<Ride> getRideByPickupAndDropLocation(String pickup,String drop,LocalDateTime dateTime){
	//		return rideRepository.getRideByPickupPointAndDropPointAndDateTime(pickup,drop,dateTime);
	//	}


	public List<Ride> getRideByPickupAndDropLocationOrderByPrice(String pickup,String drop){
		//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
		//		LocalDateTime d = LocalDateTime.parse(dateTime, formatter);
		//		//LocalDateTime d=LocalDateTime.parse(dateTime);
		//		System.out.println(d.getDayOfMonth());
		return rideRepository.getRideByPickupPointAndDropPointAndTypeOrderByPriceAsc(pickup, drop,"share");
	}

	//to get any ride based on Id

	public Ride getRideById(Integer id) {
		if(rideRepository.existsById(id)) {
			return rideRepository.findById(id).get();
		}
		throw new RideNotFoundException("Invalid ride Id "+id);
	}

	//to update the ride based on the requirement

	public Boolean updateRideCapacity(Integer id,int capacity) {
		if(rideRepository.existsById(id)) {
			Ride ride=rideRepository.findById(id).get();
			ride.setCapacity(capacity);
			rideRepository.save(ride);
			return true;
		}
		return false;
	}

	//to delete the ride

	public void deleteRide(Integer id) {
		if(rideRepository.existsById(id)) {
			rideRepository.deleteById(id);
		}
	}

	//to update the ride based on the date format

	public Ride updateRide(Ride ride) {
		if(rideRepository.existsById(ride.getRideId())) {
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
			LocalDateTime d = LocalDateTime.parse(ride.getDateString(), formatter);
			//LocalDateTime d=LocalDateTime.parse(dateTime);
			//System.out.println(d.getDayOfMonth());
			ride.setDateTime(d);

			return rideRepository.save(ride);
		}
		return null;
	}

	public List<Ride> getRideByOwnerId(Integer id) {
		// TODO Auto-generated method stub
		return rideRepository.getRideByOwnerId(id);
	}


}
