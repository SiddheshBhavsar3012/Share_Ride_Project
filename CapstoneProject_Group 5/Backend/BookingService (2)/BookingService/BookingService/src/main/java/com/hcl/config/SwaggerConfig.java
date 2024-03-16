package com.hcl.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2 //it used to enable the swagger2 for our spring app
@Configuration  //it tells spring container that there is 1 or more beans that needs to be dealt with on runtime
public class SwaggerConfig {
	@Bean // it is applied on a method to specify that it returns a bean to be managed by spring context
	public Docket libraryApi() {

		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())  
				.groupName("Booking-Service-API")
				.select().apis(RequestHandlerSelectors.basePackage("com.hcl.controller"))   //whose methods do you want add
				.build();
	}
	
	
	private ApiInfo apiInfo()
	{
		return new ApiInfoBuilder().title("ShareRide")
				.description("API for Booking-service")
				.termsOfServiceUrl("http://www.google.co.in")
				.contact(new Contact("Share Ride API","http://www.data.com","data@mail.com"))
				.license("Company License")
				.licenseUrl("http://www.data.com")
				.version("1.0")
				.build();
	}

}
