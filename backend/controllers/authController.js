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

export const login = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    // Connect to the database
    let pool = await sql.connect(config.sql);
    let result = await pool
      .request()
      .input("Email", sql.VarChar, Email)
      .query("SELECT * FROM Users WHERE Email = @Email");
    console.log(result);
    const user = result.recordset[0];
    console.log(user);
    if (!user) {
      res.status(401).json({
        status: "Error",
        message: "Authentication failed User does not exist",
      });
    } else {
      // Create a jwt token store
      let token = `JWT ${jwt.sign(
        {
          Email: user.Email,
          Username: user.Username,
          user_id: user.UserID,
        },
        process.env.SECRET,
        { expiresIn: process.env.Expiry }
      )}`;

      const { UserID, Username, Email } = user;
      return res.json({
        id: UserID,
        Username: Username,
        Email: Email,
        token: token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  } finally {
    sql.close();
  }
};
