

# GDS

## Decentralized Travel Booking Engine (Autonomous GDS Spider aka Booking Bot)

  

# What is GDS

  

GDS is an NPM module that allows independent travel agents and All Global Nomads to search the internet for the best travel booking prices across a fully extendable travel booking engine directory, it can also be configured to allow Host Agency Booking Portals and provides a full mechanism to process payments via a stripe API bridge and book travel flights and travel accommodations on any pre-defined Third Party website with a custom configuration file. As well as set smart contract commission agreements for travel services and instantly settle commission agreements on payments made via Crypto.

### To Use The Decentralized GDS 

You can start a search with the node cli command `node gds cheapoaire.js from to mm/dd/yyyy && node gds expedia.js from to mm/dd/yyyy` in the node_modules folder after doing an `npm i gds` or you can use the gds package to create a website or front end web component that can take the following parameters for specific searches. For Example
 
 - Flight Searches
	 - 
	 - Round Trip
		 - From Where?
		 	 - IATA Code
			 - City
			 - City, State (USA by Default)
			 - City, State, Country 
		 - To Where?
		 	 - IATA Code
		 - Depart Date?
		 	 - MM/DD/YYYY
		 - Return Date?
		 	 - MM/DD/YYYY
		 - Traveler
			 - Adult (16-64)
				 - int
			 - Senior (65+)
			 	 - int
			 - Child (2-15)
			 	 - int
			 - Seat Infant (under 2)
			 	 - int
			 - Lap Infant (under 2)  	   
			 	 - int
		 - Class
		 	 - Coach
			 - Premium Economy
			 - Business
			 - First
		 - Search Preferred Airline
		 	 - str
		 - Return to or from another city/airport?
		 	 - boolean
		 - Direct Flights
		 	 - boolean
	 - One Way
	 	 - From Where?
		 	 - IATA Code
			 - City
			 - City, State (USA by Default)
			 - City, State, Country 
		 - To Where?
		 	 - IATA Code
		 - Depart Date?
		 	 - MM/DD/YYYY
		 - Traveler
			 - Adult (16-64)
				 - int
			 - Senior (65+)
			 	 - int
			 - Child (2-15)
			 	 - int
			 - Seat Infant (under 2)
			 	 - int
			 - Lap Infant (under 2)  	   
			 	 - int
		 - Class
		 	 - Coach
			 - Premium Economy
			 - Business
			 - First
		 - Search Preferred Airline
		 	 - str
	 - Multi-City
		 - Flight 1
		 	 - From Where?
		 	 	 - IATA Code
			 	 - City
			 	 - City, State (USA by Default)
			 	 - City, State, Country 
		 		 - To Where?
		 	 		- IATA Code
		 		 	 - Depart Date?
		 	 		  	 - MM/DD/YYYY
		 - Flight 2
		 	 - From Where?
		 	 	 - IATA Code
			 	 - City
			 	 - City, State (USA by Default)
			 	 - City, State, Country 
		 		 - To Where?
		 	 		- IATA Code
		 		 	 - Depart Date?
		 	 		  	 - MM/DD/YYYY
		 - Flight 3
		 	 - From Where?
		 	 	 - IATA Code
			 	 - City
			 	 - City, State (USA by Default)
			 	 - City, State, Country 
		 		 - To Where?
		 	 		- IATA Code
		 		 	 - Depart Date?
		 	 		  	 - MM/DD/YYYY
		 - Traveler
			 - Adult (16-64)
				 - int
			 - Senior (65+)
			 	 - int
			 - Child (2-15)
			 	 - int
			 - Seat Infant (under 2)
			 	 - int
			 - Lap Infant (under 2)  	   
			 	 - int
		 - Class
		 	 - Coach
			 - Premium Economy
			 - Business
			 - First
		 - Search Preferred Airline
		 	 - str
		 - Direct Flights
		 	 - boolean
		 - + Add Flight
		 	 - (+ Add Flight) Button
 - Hotel Searches
	 - 
 - Car Searches
	 - 
 - Travel Bundle Search
	 - Flight + Hotel
	 	- 
	 - Flight + Hotel + Car
	 	- 
	 - Hotel + Car
	 	- 


### Roadmap

  

 - Create Basic Travel Engine Directory
	 - Craft Passenger Name Record Configs
	 
 - Create Soft Search Mechanism (Ability to Find Travel Pricing and Add arbitrage opportunities)

 - Create arbitrage algorithm 


### Important Notes
 - Proxies used for Deep Discount Tavel Searches must have matching currency payment capabilities. 

 ### Dependencies
 - Production Dependencies 
	 - Puppeteer
 - Dev Dependencies
	 - Puppeteer

# Contributing
We are actively seeking all Digital Nomads who would like to become contributors to help with the development of this GDS module. We need Developers of all skill levels for things simple and complex. If you would like to contribute your skills to help us create this travel hacking tool box please reach out to us via Email, Discord, and always feel free to pull an issue on Github. Our Email is Support@AirlineFlights.club and our Discord link is https://discord.gg/2Y94aCpY3J 