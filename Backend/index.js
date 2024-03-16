import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB");

const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes

app.post("/login", (req, res) => {
   res.send("My API login");
});

app.post("/signup", (req, res) => {
   res.send("My API signup");
});

app.listen(8080, () => {
   console.log("BE started at port 8080");
});
