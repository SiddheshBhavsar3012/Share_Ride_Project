package com.hcl.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Aspect    //Aspect can be created in spring boot with the help of the @Aspect
@Component  //registering with bean container with @component
@Slf4j      // it is abstraction of all these logging framework
public class AopConfig 
{
	//it execute when the target method throws an exception
	@AfterThrowing(value="execution(* com.hcl.service.*.* (..))", throwing="e")
	public void after(JoinPoint jp,Exception e) 
	{
		log.info(jp.getSignature()+" msg- "+e.getMessage());
	}

}
