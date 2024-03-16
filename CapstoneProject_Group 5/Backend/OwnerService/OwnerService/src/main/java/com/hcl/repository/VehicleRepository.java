package com.hcl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer>{

	public List<Vehicle> getVehicleByOwnerId(Integer id);

	public List<Vehicle> getVehicleByType(String type);

	public List<Vehicle> getVehicleByTypeOrderByPriceAsc(String string);

}
