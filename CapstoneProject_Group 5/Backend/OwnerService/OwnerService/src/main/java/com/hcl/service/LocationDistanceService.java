package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.exception.LocationDistanceException;
import com.hcl.pojo.Location;
import com.hcl.pojo.LocationDistance;
import com.hcl.repository.LocationDistanceRepository;

@Service
public class LocationDistanceService {
	@Autowired
	LocationDistanceRepository distanceRepository;
	@Autowired
	LocationService locationService;
	//To add the new location with distance
	public LocationDistance	addLocationDistance(LocationDistance distance) {

		if(getLocationDistanceBy(distance.getPickupLocation(), distance.getDropLocation())==null) {
			return distanceRepository.save(distance);
		}
		throw new LocationDistanceException("Locations are already exist");


	}

	//To get the location distance object by pickup and drop location

	public LocationDistance getLocationDistanceBy(String pickup,String drop) {
		List<LocationDistance> ld=	distanceRepository.getLocationDistanceByDropLocationAndPickupLocation(pickup,drop);

		if(ld.size()==0) {
			ld=distanceRepository.getLocationDistanceByDropLocationAndPickupLocation(drop,pickup);
			if(ld.size()==0) {
				return null;
			}
			else {
				return ld.get(0);
			}
		}
		else {
			return ld.get(0);
		}
	}
}
