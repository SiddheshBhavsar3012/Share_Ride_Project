package com.hcl.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.OwnerMessage;

@Repository//It is used to indicate that the class provides the mechanism for storage,retrival and curd operation
public interface OwnerMessage_repository extends JpaRepository <OwnerMessage,Integer>
{
	//List of the details are called by receviedId
	public List<OwnerMessage> getOwnerMessageByReceiverId(Integer id);
	//List of the details are called by senderId
	public List<OwnerMessage> getOwnerMessageBySenderId(Integer id);
}
