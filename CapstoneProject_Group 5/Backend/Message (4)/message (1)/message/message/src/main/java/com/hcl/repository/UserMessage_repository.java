package com.hcl.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.pojo.OwnerMessage;
import com.hcl.pojo.UserMessage;

@Repository
public interface UserMessage_repository extends JpaRepository<UserMessage,Integer>
{
	public List<UserMessage> getUserMessageByReceiverId(Integer id);
	public List<UserMessage> getUserMessageBySenderId(Integer id);

}
