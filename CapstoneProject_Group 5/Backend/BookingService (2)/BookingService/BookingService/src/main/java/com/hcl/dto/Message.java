package com.hcl.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
// These annotations are used to calls the getters and setters 
@Data 
@NoArgsConstructor
@AllArgsConstructor

// In booking services it calls the message project with their entites
public class Message 
{
    private Integer msgId;

	private Integer senderId;	
	
	private Integer receiverId;
	
	
	private String message;
	
	
	private LocalDate msgdeliverydate;

}
