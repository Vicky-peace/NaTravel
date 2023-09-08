import sql from "mssql";
import bcrypt from "bcrypt";
import config from "../db/config.js";
import jwt from "jsonwebtoken";

////*Register a User*///

export const register = async (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;
  const hashedPassword = bcrypt.hashSync(Password, 10);
  try {
    // connection to the database
    let pool = await sql.connect(config.sql);

    // Check if the user already exists
    const existingUser = await pool
      .request()
      .input("Email", sql.VarChar, Email)
      .query("SELECT * FROM  Users WHERE email = @email");
    if (existingUser.recordset.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Insert a user
    await pool
      .request()
      .input("FirstName", sql.VarChar, FirstName)
      .input("LastName", sql.VarChar, LastName)
      .input("Email", sql.VarChar, Email)
      .input("Password", sql.VarChar, hashedPassword)
      .query(
        "INSERT INTO Users (FirstName, LastName, Email, Password) VALUES (@FirstName, @LastName, @Password, @Email)"
      );

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  } finally {
    sql.close();
  }
};
