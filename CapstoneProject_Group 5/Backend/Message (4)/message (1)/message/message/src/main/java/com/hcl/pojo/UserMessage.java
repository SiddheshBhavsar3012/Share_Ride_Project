package com.hcl.pojo;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data//to set getters and setters
@NoArgsConstructor//constructor using fields
@AllArgsConstructor
@Entity
@Table(name="user_message")
public class UserMessage 
{		@GeneratedValue(strategy = GenerationType.AUTO)
		@Id
		@Column(name="id")
		private Integer msgId;
		
		@Column(name="userId")
		private Integer senderId;
		
		@Column(name="ownerId")
		private Integer receiverId;
		
		@Column(name="text")
		private String message;
		
		@Column(name="date")
		private LocalDate msgdeliverydate;

}


