import sql from "mssql";
import bcrypt from "bcrypt";
import config from "../db/config.js";
import jwt from "jsonwebtoken";

////*Register a User*///

export const register = async (req, res) => {
  const { Username, Email, Name, Password } = req.body;
  const hashedPassword = bcrypt.hashSync(Password, 10);
  try {
    let pool = await sql.connect(config.sql);

    // Check if the user already exists
    const existingUser = await pool
      .request()
      .input("Email", sql.VarChar, Email)
      .query("SELECT * FROM Users WHERE Email = @Email");
    if (existingUser.recordset.length > 0) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Insert the user into the db
    await pool
      .request()
      .input("Name", sql.VarChar, Name)
      .input("Email", sql.VarChar, Email)
      .input("Username", sql.VarChar, Username)
      .input("Password", sql.VarChar, hashedPassword)
      .query(
        "INSERT INTO Users (Name, Email, Password, Username) VALUES (@Name, @Email, @Password, @Username)"
      );

    return res.status(201).json({
      status: "Success",
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal server error",
    });
  } finally {
    sql.close();
  }
};
