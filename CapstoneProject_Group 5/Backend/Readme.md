Welcome To Share Ride app
To need start this application you need to some configuration
	1 Create Database in mysql
		.share_ride_user
		.share_ride_owner
		.share_ride_booking
		.share_ride_message
	To change  the databse name you need to do changes in application.properties

	2 First Run the Eureka server
	3 Run all available microservice
	4 Check the eureka server -> http://localhost:8761/
	5 There you will see all the services are run or registered (4-service)
		
		You will see the data like below

		BOOKING-SERVICE	n/a (1)	(1)	UP (1) - LP-PF22GKY9.HCLT.CORP.HCL.IN:Booking-Service:8084
		MESSAGE-SERVICE	n/a (1)	(1)	UP (1) - LP-PF22GKY9.HCLT.CORP.HCL.IN:Message-Service:8085
		OWNER-SERVICE	n/a (1)	(1)	UP (1) - LP-PF22GKY9.HCLT.CORP.HCL.IN:Owner-Service:8082
		USER-SERVICE	n/a (1)	(1)	UP (1) - LP-PF22GKY9.HCLT.CORP.HCL.IN:User-Service:8083
	6 Then open the shareride app and put command ->npm install 
	7 Again put npm start command in terminal