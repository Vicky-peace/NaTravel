create database NaTravel


-- Create the Users Table
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username VARCHAR(50),
    Password VARCHAR(100), -- Hashed and salted password
    Email VARCHAR(100),
    Name VARCHAR(100),
    ProfilePicture NVARCHAR(255)
);

-- Create the Destinations Table
CREATE TABLE Destinations (
    DestinationID INT PRIMARY KEY IDENTITY(1,1),
    DestinationName VARCHAR(100),
    Description VARCHAR(MAX),
    Location VARCHAR(100),
    Image NVARCHAR(255),
    AverageRating DECIMAL(3, 2)
);


-- Create the Hotels Table
CREATE TABLE Hotels (
    HotelID INT PRIMARY KEY IDENTITY(1,1),
    HotelName VARCHAR(100),
    Description VARCHAR(MAX),
    Location VARCHAR(100),
    Image NVARCHAR(255),
    AverageRating DECIMAL(3, 2),
    PricePerNight DECIMAL(10, 2)
);


-- Create the Flights Table
CREATE TABLE Flights (
    FlightID INT PRIMARY KEY IDENTITY(1,1),
    Airline VARCHAR(100),
    DepartureLocation VARCHAR(100),
    ArrivalLocation VARCHAR(100),
    DepartureDateTime DATETIME,
    ArrivalDateTime DATETIME,
    Price DECIMAL(10, 2),
    AvailableSeats INT
);

-- Create the Bookings Table
CREATE TABLE Bookings (
    BookingID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    DestinationID INT,
    HotelID INT,
    FlightID INT,
    CheckInDate DATE,
    CheckOutDate DATE,
    TotalPrice DECIMAL(10, 2),
    BookingStatus VARCHAR(20),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (DestinationID) REFERENCES Destinations(DestinationID),
    FOREIGN KEY (HotelID) REFERENCES Hotels(HotelID),
    FOREIGN KEY (FlightID) REFERENCES Flights(FlightID)
);