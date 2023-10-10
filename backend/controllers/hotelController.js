import sql from "mssql";
import config from "../db/config.js";

// Create hotel
export const createHotel = async (req, res) => {
  const {
    HotelName,
    Description,
    Location,
    Image,
    AverageRating,
    PricePerNight,
  } = req.body;
  try {
    //   Conncet to the database
    let pool = await sql.connect(config.sql);
    let result = await pool
      .request()
      .input("HotelName", sql.VarChar, HotelName)
      .input("Description", sql.VarChar, Description)
      .input("Location", sql.VarChar, Location)
      .input("Image", sql.NVarChar, Image)
      .input("AverageRating", sql.Decimal, AverageRating)
      .input("PricePerNight", sql.Decimal, PricePerNight)
      .query(
        `INSERT INTO Hotels (HotelName, Description, Location, Image, AverageRating, PricePerNight)
        VALUES (@HotelName, @Description, @Location, @Image, @AverageRating, @PricePerNight)
        SELECT SCOPE_IDENTITY() AS HotelID`
      );
    res
      .status(201)
      .json({ message: "Hotel created", HotelID: result.recordset[0].HotelID });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

// Get Hotels
export const getHotels = async (req, res) => {
  try {
    //  connect to the db
    let pool = await sql.connect(config.sql);
    const result = await pool.request().query("SELECT * FROM Hotels");
    res.status(201).json(result.recordset);
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};
