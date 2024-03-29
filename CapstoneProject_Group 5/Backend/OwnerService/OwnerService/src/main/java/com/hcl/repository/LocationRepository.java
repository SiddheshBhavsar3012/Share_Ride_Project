package com.hcl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.Location;
@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {

	public Location	getLocationByLocationName(String location);
}
