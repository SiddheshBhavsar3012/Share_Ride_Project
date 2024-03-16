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

import com.hcl.pojo.Vehicle;
import com.hcl.service.VehicleService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/vehicle")//http://localhost:8082/vehicle
public class VehicleController {
	@Autowired
	VehicleService service;
	//http://localhost:8082/vehicle/add
	@PostMapping("/add")
	public Vehicle addVehicle(@RequestBody Vehicle vehicle) {
		return service.addVehicle(vehicle);	
	}
	//http://localhost:8082/vehicle/getAll
	@GetMapping("/getAll")
	public List<Vehicle> getAllVehicle(){
		return service.getAllVehicle();
	}
	//http://localhost:8082/vehicle/wheeler/BMW
	@GetMapping("/wheeler/{type}")
	public List<Vehicle> getWheller(@PathVariable String type){
		return service.getVehicleByType(type);
	}
	//http://localhost:8082/vehicle/byId/2
	@GetMapping("/byId/{id}")
	public Vehicle getVehicle(@PathVariable Integer id) {
		return service.getVehicleById(id);
	}
	//http://localhost:8082/vehicle/getBy/owner/2
	@GetMapping("/getBy/owner/{id}")
	public List<Vehicle> getVehicleByOwnerId(@PathVariable Integer id){
		return service.getVehicleByOwnerId(id);
	}
	//http://localhost:8082/vehicle/update
	@PutMapping("/update")
	public Vehicle updateVehicle(@RequestBody Vehicle vehicle) {
		return service.updateVehicle(vehicle);
	}
	//http://localhost:8082/vehicle/delete/2
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		service.deleteVehicle(id);
	}
	//http://localhost:8082/vehicle/price/2 wheeler
	@GetMapping("/price/{type}")
	public List<Vehicle> getVehicleByPrice(@PathVariable String type){
		return service.getVehicleByPrice(type);
	}	
}
