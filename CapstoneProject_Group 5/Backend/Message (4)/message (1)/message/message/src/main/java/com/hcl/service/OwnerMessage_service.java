package com.hcl.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.pojo.OwnerMessage;
import com.hcl.repository.OwnerMessage_repository;

@Service
public class OwnerMessage_service {
@Autowired
OwnerMessage_repository omrepo;
	public OwnerMessage saveMessage(OwnerMessage message) {
		LocalDate date=LocalDate.now();
		
		message.setMsgdeliverydate(date);
		return omrepo.save(message);
	}
	
	public OwnerMessage getLastMessageByReceiverId(Integer id) {
		return omrepo.getOwnerMessageByReceiverId(id).get(0);
	}
	public List<OwnerMessage> getAllMessageByReceiverId(Integer id){
		return omrepo.getOwnerMessageByReceiverId(id);
	}

	public void deleteMsgById(Integer id) {
		// TODO Auto-generated method stub
		if(omrepo.existsById(id)) {
			omrepo.deleteById(id);
		}
		
	}
	


}
