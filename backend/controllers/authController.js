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

    return res.status(201).json({
      message: "User registered successfully",
      status: "success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  } finally {
    sql.close();
  }
};

// Login a User //
export const login = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    // connection to the db
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
        message: "Authentication User does not exist",
      });
    } else if (user) {
      if (!bcrypt.compareSync(Password, user.Password)) {
        res.status(404).json({
          status: "error",
          message: "Invalid credentials",
        });
      } else {
        // Create a jwt token store
        const token = `JWT ${jwt.sign(
          {
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName,
          },
          process.env.SECRET,
          { expiresIn: process.env.EXPIRY }
        )}`;

        const { Email, FirstName, LastName } = user;
        return res.status(201).json({
          Email: Email,
          FirstName: FirstName,
          LastName: LastName,
          token: token,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  } finally {
    sql.close();
  }
};
