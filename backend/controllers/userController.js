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

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool.request().query("SELECT * FROM Users");

    const users = result.recordset.map((user) => {
      const { password, ...otherDetails } = user;
      return otherDetails;
    });
    res.status(404).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

// Update user

export const updateUser = async (req, res) => {
  const { UserId } = req.params;
  const { Username, Email, Name, ProfilePicture } = req.body;
  try {
    let pool = await sql.connect(config.sql);
    let updateUser = await pool
      .request()

      .input("UserID", sql.Int, UserId)
      .input("Email", sql.VarChar, Email)
      .input("Username", sql.VarChar, Username)
      .input("Name", sql.VarChar, Name)
      .input("ProfilePicture", sql.VarChar, ProfilePicture)
      .query(
        "UPDATE Users SET Email= @Email, Username = @Username, Name = @Name, ProfilePicture = @ProfilePicture"
      );
    console.log(updateUser);
    res.status(200).json({
      status: "success",
      user: updateUser,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  const { UserID } = req.params;
  try {
    let pool = await sql.connect(config.sql);
    await pool
      .request()
      .input("UserID", sql.Int, UserID)
      .query("DELETE FROM Users  WHERE UserID = @UserID");

    res.status(200).json({
      status: "succcess",
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
