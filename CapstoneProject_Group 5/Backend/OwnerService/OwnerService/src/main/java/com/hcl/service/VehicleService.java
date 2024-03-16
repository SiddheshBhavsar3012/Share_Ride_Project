package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.exception.VehicleNotFoundException;
import com.hcl.pojo.Vehicle;
import com.hcl.repository.VehicleRepository;

@Service
public class VehicleService {
	@Autowired
	VehicleRepository vehicleRepository;

	//to add the vehicle

	public Vehicle addVehicle(Vehicle vehicle) {
		return 	vehicleRepository.save(vehicle);
	}

	//to get all vehicle details

	public List<Vehicle> getAllVehicle() {
		return 	vehicleRepository.findAll();
	}

	//to get the vehicle based on the owner Id

	public List<Vehicle> getVehicleByOwnerId(Integer id){
		return vehicleRepository.getVehicleByOwnerId(id);
	}

	//to delete the vehicle 

	public void deleteVehicle(Integer id) {
		if(vehicleRepository.existsById(id) ) {
			vehicleRepository.deleteById(id);
			System.out.println("Vehicle Deleted");
			return;
		}
		System.out.println("Vehicle not Deleted");
		throw new VehicleNotFoundException("Vehicle ID not exist "+id);
	}

	// to update the vehicle

	public Vehicle updateVehicle(Vehicle vehicle) {
		if(vehicleRepository.existsById(vehicle.getVehicleId())) {
			return vehicleRepository.save(vehicle);
		}
		System.out.println("Vehicle not updated");
		throw new VehicleNotFoundException("Vehicle ID not exist "+vehicle.getVehicleId());
	}

	//to get the vehicle by Id

	public Vehicle getVehicleById(Integer id) {
		if(vehicleRepository.existsById(id) ) {
			return vehicleRepository.findById(id).get();

		}
		System.out.println("Vehicle not found");
		return null;
	}

	public List<Vehicle> getVehicleByType(String type) {
		// TODO Auto-generated method stub
		return vehicleRepository.getVehicleByType(type);
	}

	public List<Vehicle> getVehicleByPrice(String type) {
		// TODO Auto-generated method stub

		return vehicleRepository.getVehicleByTypeOrderByPriceAsc(type);
	}

}
