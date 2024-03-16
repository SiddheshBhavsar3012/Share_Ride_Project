package com.hcl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.BookingDetails;

@Repository
//It is used to indicate that the class provides the mechanism for storage,retrival and curd operation
public interface BookingRepository extends JpaRepository<BookingDetails,Integer>
{
//List of the details are called by userId
	public List<BookingDetails> getBookingDetailsByUserId(Integer id);
//List of the details are called by status 
	public List<BookingDetails> getBookingDetailsByStatus(String status);
//List of the details are called by OwnerId and Status
	public List<BookingDetails> getBookingDetailsByOwnerIdAndStatus(Integer id, String string);

}
