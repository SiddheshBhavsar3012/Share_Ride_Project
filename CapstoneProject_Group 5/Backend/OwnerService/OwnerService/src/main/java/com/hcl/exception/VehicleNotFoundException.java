package com.hcl.exception;

public class VehicleNotFoundException extends RuntimeException{
	public VehicleNotFoundException(String msg) {
		super(msg);
	}
}
