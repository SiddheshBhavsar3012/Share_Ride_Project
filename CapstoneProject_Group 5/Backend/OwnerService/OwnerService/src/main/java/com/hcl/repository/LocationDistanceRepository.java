package com.hcl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.LocationDistance;

@Repository
public interface LocationDistanceRepository extends JpaRepository<LocationDistance,Integer> {

	List<LocationDistance> getLocationDistanceByDropLocationAndPickupLocation(String pickup, String drop);

}
