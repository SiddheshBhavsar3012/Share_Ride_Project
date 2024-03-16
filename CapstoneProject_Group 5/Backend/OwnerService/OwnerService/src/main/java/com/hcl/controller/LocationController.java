package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.pojo.Location;
import com.hcl.service.LocationService;
@RestController  //@Controller+@ResponseBody
@CrossOrigin(origins = "*")
@RequestMapping("/location") //http://localhost:8082/location
public class LocationController {

	@Autowired
	LocationService locationService;
	
	//http://localhost:8082/location/getAll
	@GetMapping("/getall")
	public List<Location> getAllLocations(){
		return locationService.getAllLocations();
	}
	
	//http://localhost:8082/location/add
	@PostMapping("/add")
	public Location addLocations(@RequestBody Location location) {
		return locationService.saveLocation(location);
	}
	
	//http://localhost:8082/location/delete/{id}
	@DeleteMapping("/delete/{id}")
	public void deleteLocation(@PathVariable Integer id) {
		locationService.deleteLocationById(id);

	}
	
	//http://localhost:8082/location/getById/{id}
	@GetMapping("/getById/{id}")
	public Location getLocationById(@PathVariable Integer id) {
		return locationService.getLocationById(id);
	}


}
