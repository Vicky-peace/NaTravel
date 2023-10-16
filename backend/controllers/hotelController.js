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

// Get single hotels by ID
/* Not yet tested*/
export const getHotel = async (req,res) =>{
  const {HotelID} = req.params;
  try{
    // connect to the db
    let pool = await sql.connect(config.sql)
    let result = await pool.request()
    .query('SELECT * FROM  Hotels WHERE HotelID = @HotelID');
    res.status(201).json(result.recordset)

  } catch(error){
    console.log(error)
    res.status(404).json({error: "An error occurred while retrieving the data"})
  }
}

// update the hotels
export const updateHotels = async ( req,res) =>{
  const {HotelID} = req.params;
  const {HotelName,Description,Location,Image,AverageRating, PricePerNight}= req.body;
  try{
    //  connect to the db
    let pool = await sql.connect(config.sql)
    let updateHotel = await pool.request()
    .input("HotelName",sql.VarChar,HotelName)
    .input("Description", sql.VarChar, Description)
    .input("Location", sql.VarChar, Location)
    .input("Image", sql.VarChar, Image)
    .input("AverageRating", sql.VarChar, AverageRating)
    .input("PricePerNight", sql.VarChar,PricePerNight)
    .query("UPDATE Hotels SET HotelName = @HotelName, Description = @Description, Location = @Location, Image = @Image, AverageRating = @AverageRating, PricePerNight = @PricePerNight ")
    console.log(updateHotel)
    res.status(201).json({
      status: success,
      message: 'Update Hotels successful'
    })
  } catch(error){
    console.log(error)
    res.status(404).json({error: "An error occurred while updating  the data"})
  }
}

// Delete Hotels
export const deleteHotels = async( req,res) =>{
  const {HotelID} = req.params;
  try{
    // connect to the db
    let pool = await sql.connect(config.sql)
    let result = await pool.request()
    .input("HotelID", sql.Int, HotelID)
    .query("SELECT * FROM Hotels WHERE HotelID = @HotelID");
    console.log(result)
    res.status(201).json("Hotel removed successfully")

  }catch(error){
    console.log(error)
    res.status(404).json({error: 'delete unsuccessful an error occured'})
  }
}