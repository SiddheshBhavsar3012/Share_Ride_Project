package com.hcl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.pojo.LocationDistance;
import com.hcl.service.LocationDistanceService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/route")  //http://localhost:8082/location
public class LocationDistanceController {
	@Autowired
	LocationDistanceService distanceService;
	//http://localhost:8082/location/add
	@PostMapping("/add")
	public LocationDistance addLocationDistance(@RequestBody LocationDistance  locationDistance) {
		return distanceService.addLocationDistance(locationDistance);
	}
	//http://localhost:8082/location/distance
	@PostMapping("/distance")
	public LocationDistance getLocationDistance(@RequestBody LocationDistance locationDistance) {
		return distanceService.getLocationDistanceBy(locationDistance.getPickupLocation(), locationDistance.getDropLocation());
	}

}
