import sql from "mssql";
import bcrypt from "bcrypt";
import config from "../db/config.js";
import jwt from "jsonwebtoken";

// Get one user
export const getUser = async (req, res) => {
  const { UserID } = req.params;
  console.log(UserID);
  try {
    // Connect to the db
    let pool = await sql.connect(config.sql);
    let userOne = await pool
      .request()
      .input("UserID", sql.Int, UserID)
      .query("SELECT * FROM Users WHERE UserID = @UserID");

    !userOne.recordsets[0]
      ? res.status(404).json({
          message: "User not found",
        })
      : res.status(200).json({
          status: "success",
          user: userOne.recordset[0],
        });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
