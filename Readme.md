# Introduction

NaTravel is a travel website that allows users to book destinations, hotels, flights, and packages. The website is built using MSSQL and features a variety of functionalities, including user authentication, destination browsing, hotel browsing, flight browsing, booking process, and booking management.

## Database Tables

The NaTravel database contains the following tables:

## Users:

This table stores information about registered users, such as their username, password, email, name, and profile picture.

## Destinations:

This table stores information about destinations, such as their name, description, location, image, and average rating.

## Hotels:

This table stores information about hotels, such as their name, description, location, image, average rating, and price per night.

## Flights:

This table stores information about flights, such as the airline, departure and arrival locations, departure and arrival times, price, and available seats.

## Bookings:

This table stores information about bookings, such as the user ID, destination ID, hotel ID, flight ID, check-in date, check-out date, total price, and booking status.

## Backend Flowchart

The following flowchart shows the backend flow of the NaTravel website:

## [Start]

-> User visits NaTravel website
-> Back-end checks to see if user is logged in
-> If user is logged in:
-> Retrieve user information from Users table
-> If user is not logged in:
-> Display login page
-> User requests information about a destination, hotel, flight, or booking
-> Back-end retrieves relevant data from the database
-> Back-end sends data to front-end
-> User books a destination, hotel, flight, or package
-> Back-end validates user input
-> Back-end creates a new booking in the Bookings table
-> Back-end sends confirmation email to user
[End]
Frontend Flowchart
The following flowchart shows the frontend flow of the NaTravel:

## [Start]

-> User visits NaTravel homepage
-> User can browse through featured destinations, hotels, flights, and packages
-> User can also search for specific destinations, hotels, flights, and packages
-> User clicks on a destination to view more information
-> Destination page displays information about the destination, such as its location, climate, attractions, and things to do
-> User can also browse through hotels and flights available in the destination
-> User clicks on a hotel to view more information
-> Hotel page displays information about the hotel, such as its location, amenities, and pricing
-> User can also view images of the hotel and book a room
-> User clicks on a flight to view more information
-> Flight page displays information about the flight, such as its departure and arrival times, duration, and price
-> User can also book a seat on the flight
-> User clicks on a button to book a destination, hotel, flight, or package
-> User is taken to a booking form where they can enter their personal information and payment details
-> User submits booking form
-> Booking is confirmed and user receives a confirmation email
[End]

## Functionalities

The NaTravel website features the following functionalities:

User authentication: Users can create accounts and log in to the website to manage their bookings and preferences.
Destination browsing: Users can browse through a list of destinations, each with its own page with information and images.
Hotel browsing: Users can browse through a list of hotels, each with its own page with information, images, and availability.
Flight browsing: Users can browse through a list of flights, each with its own page with information, images, and pricing.
Booking process: Users can book destinations, hotels, flights, and packages by entering their personal information and payment details.
Booking management: Users can view and manage their bookings from their account page.
Conclusion
NaTravel is a powerful and user-friendly travel website that offers a variety of features and functionalities. The website is built using MSSQL and is easy to scale and maintain.
