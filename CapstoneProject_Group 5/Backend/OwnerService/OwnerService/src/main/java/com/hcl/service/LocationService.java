package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.exception.LocationNotExistException;
import com.hcl.pojo.Location;
import com.hcl.repository.LocationRepository;

@Service
public class LocationService {
	@Autowired
	LocationRepository locationRepso;

	//to save the location
	public Location saveLocation(Location location) {
		System.out.println(location.toString());
		return locationRepso.save(location);
	}

	//to get all the locations
	public List<Location> getAllLocations(){
		return locationRepso.findAll();
	}
	//find location by Id
	public Location getLocationById(Integer id) {
		if(locationRepso.existsById(id)) {
			return locationRepso.findById(id).get();
		}

		throw new LocationNotExistException("Invalid Location Id : "+id);
	}

	//delete location by Id

	public void deleteLocationById(Integer id) {
		if(locationRepso.existsById(id)) {
			locationRepso.deleteById(id);
			System.out.println("Location Deleted");
			return;
		}
		System.out.println("Location not Deleted");
		throw new LocationNotExistException("Invalid Location Id : "+id);

	}

	//Update location by Id
	public Location UpdateLocation(Location location) {
		if(locationRepso.existsById(location.getLocationId())) {
			return 	locationRepso.save(location);
		}
		throw new LocationNotExistException("Invalid Location Id : "+location.getLocationId()+" location not update");
	}
	//to check location is exists 
	public boolean isLocationExist(String pickupLocation) {
		Location loc= locationRepso.getLocationByLocationName(pickupLocation);
		if(loc==null) {
			return true;
		}
		return false;
	}
}
