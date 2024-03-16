package com.hcl.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.Ride;

@Repository
public interface RideRepository extends JpaRepository<Ride, Integer> {

	//	List<Ride> getRideByPickupPointAndDropPointAndDateTime(String pickup, String drop, LocalDateTime dateTime);
	List<Ride> getRideByPickupPointAndDropPoint(String pickup, String drop);
	//	List<Ride> getRideByPickupPointAndDropPointAndDateTimeOrderByPriceAsc(String pickup, String drop, LocalDateTime dateTime);
	//List<Ride> getRideByPickupPointAndDropPointAndDateTimeAndTypeOrderByPriceAsc(String pickup, String drop,
	//	LocalDateTime d, String string);
	List<Ride> getRideByOwnerId(Integer id);
	List<Ride> getRideByPickupPointAndDropPointAndTypeOrderByPriceAsc(String pickup, String drop, String string);
}
