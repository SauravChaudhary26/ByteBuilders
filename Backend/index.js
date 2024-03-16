import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const port = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB");

const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   password: String,
   role: String,
});

const User = new mongoose.model("User", userSchema);

//Login logic

app.post("/login", async (req, res) => {
   const { email, password, role } = req.body;

   try {
      const user = await User.findOne({ email: email });
      if (!user) {
         return res.status(404).json({ message: "User not registered" });
      }

      if (password === user.password && role === user.role) {
         res.status(200).json({ message: "Login successful", user: user });
      } else {
         res.status(200).json({ message: "Password incorrect", user: user });
      }
   } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal server error" });
   }
});

//Signup logic

app.post("/signup", async (req, res) => {
   const { name, email, password, role } = req.body;
   try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
         return res.status(400).json({ message: "User is already registered" });
      }
      // const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
         name,
         email,
         password,
         role,
      });
      await newUser.save();
      res.status(201).json({
         message: "Successfully Registered, Please login now",
      });
   } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal server error" });
   }
});

//server start message

app.listen(port, () => {
   console.log("server started at port 8080");
});
