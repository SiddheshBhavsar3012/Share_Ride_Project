package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.dto.RideDTO;
import com.hcl.pojo.Ride;
import com.hcl.service.RideService;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ride") //http://localhost:8082/ride
public class RideController {
	@Autowired
	RideService rideService;
	//http://localhost:8082/ride/getAll
	@GetMapping("/getAll")
	public List<Ride> getAllRides(){
		return rideService.getAllRide();
	}
	//http://localhost:8082/ride/getByTime/Location
	@PostMapping("/getByTime/Location")
	public List<Ride> getRideByTimeAndLocation(@RequestBody RideDTO ridedto){
		System.out.println(ridedto.toString());
		return rideService.getRideByPickupAndDropLocationOrderByPrice(ridedto.getPickupLocation(),ridedto.getDropLocation());
	}
	//http://localhost:8082/ride/add
	@PostMapping("/add")
	public Ride addride(@RequestBody Ride ride) {
		return rideService.addRide(ride);
	}
	//http://localhost:8082/ride/update/capacity/2/
	@PutMapping("/update/capacity/{id}/{cap}")
	public void updateRideCapacity(@PathVariable Integer id,@PathVariable Integer cap) {
		rideService.updateRideCapacity(id, cap);
	}
	//http://localhost:8082/ride/delete/2
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		rideService.deleteRide(id);
	}
	//http://localhost:8082/ride/byid/2
	@GetMapping("/byid/{id}")
	public Ride getrideByID(@PathVariable Integer id) {
		return rideService.getRideById(id);
	}
	//http://localhost:8082/ride/update
	@PutMapping("/update")
	public Ride updateRide(@RequestBody Ride ride) {
		return rideService.updateRide(ride);
	}
	//http://localhost:8082/ride/owner/2
	@GetMapping("/owner/{id}")
	public List<Ride> getRideByOwnerId(@PathVariable Integer id) {
		return rideService.getRideByOwnerId(id);
	}
}
