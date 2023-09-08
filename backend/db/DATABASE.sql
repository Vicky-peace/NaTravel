create Database NaTravel;

CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
	Password VARCHAR(100),
    -- Add other user-related fields as needed
);


-- Create the Tours table
CREATE TABLE Tours (
    TourID INT PRIMARY KEY IDENTITY(1,1),
    TourName VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    -- Add other tour-related fields as needed
);
-- Create the Bookings table
CREATE TABLE Bookings (
    BookingID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    TourID INT,
    BookingDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users (UserID),
    FOREIGN KEY (TourID) REFERENCES Tours (TourID),
    -- Add other booking-related fields as needed
);


-- Create the Reviews table
CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    TourID INT,
    Rating INT,
    Comment TEXT,
    ReviewDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users (UserID),
    FOREIGN KEY (TourID) REFERENCES Tours (TourID),
    -- Add other review-related fields as needed
);