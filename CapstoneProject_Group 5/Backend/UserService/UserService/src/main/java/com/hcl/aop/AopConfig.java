package com.hcl.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Component
@Slf4j
public class AopConfig {
	@AfterThrowing(value="execution(* com.hcl.service.*.* (..))", throwing="e")
	public void after(JoinPoint jp,Exception e) {
		log.info(jp.getSignature()+" msg- "+e.getMessage());
	}

}
