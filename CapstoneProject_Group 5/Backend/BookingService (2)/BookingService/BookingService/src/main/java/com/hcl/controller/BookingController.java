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

import com.hcl.pojo.BookingDetails;
import com.hcl.service.BookingService;

@RestController // @Controller+@ResponseBody
@CrossOrigin(origins = "*") //resource sharing only for the specific methods
@RequestMapping("/bookingDetailas") //used to map web req onto specific handler classes and methods

public class BookingController 
{
	
	@Autowired
	BookingService bookingService;
	//http://localhost:8083/booking/add
	@PostMapping("/add")
	public BookingDetails addBookingDetails(@RequestBody BookingDetails bd) 
	{
		return bookingService.addBookingDetails(bd);
	}
	
	//http://localhost:8083/booking/getAll
	@GetMapping("/getAll")
	public List<BookingDetails> getAllBookingDetails()
	{
		return bookingService.getAllBookigDetails();
	}
	
	//http://localhost:8083/booking/byuser/Id/{id}
	@GetMapping("/byuser/Id/{id}")
	public List<BookingDetails> getAllBookingDetailsByUsderId(@PathVariable Integer id)
	{
		return bookingService.getBookingDetailsByUserId(id);
	}
	
	//http://localhost:8083/booking/bookingId/{id}
	@GetMapping("/bookingId/{id}")
	public BookingDetails getBookingDetailsbyBookingId(@PathVariable Integer id) 
	{
		return bookingService.getBookingDetailsByBookingId(id);
	}
	
	//http://localhost:8083/bookingbyStatus/{status}
	@GetMapping("byStatus/{status}")
	public List<BookingDetails> getAllBookingDetailsByStatus(@PathVariable String status)
	{
		return bookingService.getBookingDetailsByStatus(status);
	}
	
	//http://localhost:8083/booking/updateStatus/status/{status}/{id}
	@PutMapping("/updateStatus/status/{status}/{id}")
	public BookingDetails updateStatus(@PathVariable String status,@PathVariable Integer id) 
	{
		System.out.println(status);
		return bookingService.updateStatus(id, status);
	}
	
	//http://localhost:8083/booking/byownerId/{id}
	@GetMapping("/byownerId/{id}")
	public List<BookingDetails> getAllBookingDetailsByOwnerId(@PathVariable Integer id)
	{
		return bookingService.getBookingDetailsByOwnerId(id);
	}
	
	//http://localhost:8083/booking/delete/{id}
	@DeleteMapping("/delete/{id}")
	public void deleteBookingDetails(@PathVariable Integer id) 
	{
		bookingService.deleteBookingDetails(id);
	}	
	
}
