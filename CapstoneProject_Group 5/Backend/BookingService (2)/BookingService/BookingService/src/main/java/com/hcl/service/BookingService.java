package com.hcl.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hcl.dto.Message;
import com.hcl.pojo.BookingDetails;
import com.hcl.repository.BookingRepository;

@Service //it is used to denote a class that performs a specific service or function in spring boot application
public class BookingService 
{
	//logic of the operations
	@Autowired
	BookingRepository bookingRepository;
	
	@Autowired
	RestTemplate restTemplate;
	
	public BookingDetails addBookingDetails(BookingDetails bookingDetalis) {
		BookingDetails bd= bookingRepository.save(bookingDetalis);
		sendMessageToOwner(bd.getUserId(),bd.getOwnerId(),bd.getStatus(),bd.getBookingId());
		return bd;
	}
	
	
	public void sendMessage(Integer userId,Integer ownerId,String message,Integer id) {
		Message msg=new Message();
		msg.setMessage("Your booking status is "+message+" For Booking : "+id);
		msg.setSenderId(ownerId);
		msg.setReceiverId(userId);
		msg.setMsgdeliverydate(LocalDate.now());
		System.out.println(msg.toString());
		restTemplate.postForObject("http://Message-Service/owner/send",msg,Message.class);
		
	}
	public void sendMessageToOwner(Integer userId,Integer ownerId,String message, Integer id) {
		Message msg=new Message();
		msg.setMessage("Booking is added by user Id : "+userId+" For Booking Id "+id+" status is "+message);
		msg.setSenderId(userId);
		msg.setReceiverId(ownerId);
		msg.setMsgdeliverydate(LocalDate.now());
		System.out.println(msg.toString());
		restTemplate.postForObject("http://Message-Service/user/send",msg,Message.class);
		
	}
	

	
	// Booking details for updating the status
	public BookingDetails updateStatus(Integer id,String status) 
	{
		if(bookingRepository.existsById(id)) 
		{
			BookingDetails bookingDetalis= bookingRepository.findById(id).get();
				sendMessage(bookingDetalis.getUserId(),bookingDetalis.getOwnerId(),status,bookingDetalis.getBookingId());
				bookingDetalis.setStatus(status);
				return bookingRepository.save(bookingDetalis);
		}
		return null;
	}
	
	// Getting all the booking details
	public List<BookingDetails> getAllBookigDetails(){
		return bookingRepository.findAll();
	}
	
	//getting booking details by the bookingId
	public BookingDetails getBookingDetailsByBookingId(Integer id)
	{
		if(bookingRepository.existsById(id)) {
			return bookingRepository.findById(id).get();
		}
		return null;
	}
	
	// Getting the booking details by userId
	public List<BookingDetails> getBookingDetailsByUserId(Integer id)
	{
		return bookingRepository.getBookingDetailsByUserId(id);
	}
	
	//Booking details by the status
	public List<BookingDetails> getBookingDetailsByStatus(String status)
	{
		return bookingRepository.getBookingDetailsByStatus(status);
	}

// booking details by ownerId
	public List<BookingDetails> getBookingDetailsByOwnerId(Integer id) 
	{
		// TODO Auto-generated method stub
		return bookingRepository.getBookingDetailsByOwnerIdAndStatus(id,"In-process");
	}

//Delete the booking details by the bookingId
	public void deleteBookingDetails(Integer id) 
	{
		// TODO Auto-generated method stub
		if(bookingRepository.existsById(id)) 
		{
			bookingRepository.deleteById(id);
		}		
	}
}
