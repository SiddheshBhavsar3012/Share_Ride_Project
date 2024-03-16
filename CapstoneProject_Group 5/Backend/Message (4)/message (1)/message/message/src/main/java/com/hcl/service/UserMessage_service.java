package com.hcl.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.pojo.UserMessage;
import com.hcl.repository.UserMessage_repository;

@Service  //it is used to denote a class that performs a specific service or function in spring boot application
public class UserMessage_service
{
	@Autowired
	UserMessage_repository umrepo;
	// user message save with the local date
	public UserMessage saveMessage(UserMessage message)
	{
		LocalDate date=LocalDate.now();

		message.setMsgdeliverydate(date);
		return umrepo.save(message);
	}

	//getting the user message by the recevierId
	public UserMessage getLastMessageByReceiverId(Integer id)
	{
		return umrepo.getUserMessageByReceiverId(id).get(0);
	}
	
	//getting the user message getAll by the recevierId
	public List<UserMessage> getAllMessageByReceiverId(Integer id)
	{
		return umrepo.getUserMessageByReceiverId(id);
	}

	//deleting the message with Id
	public void deleteMsgById(Integer id) {
		// TODO Auto-generated method stub
		if(umrepo.existsById(id)) {
			umrepo.deleteById(id);
		}
	}
}
