// index.js
import express from "express";
import dotenv from "dotenv";
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import auth from "./auth.js";
import User from "./User.js";
import Admins from "./Admins.js";
import course from "./Course.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));
app.use(cors({
  origin: "https://nkskills-edge.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Ensure data directory exists for storing contacts
const dataDir = path.resolve('./data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const contactsFile = path.join(dataDir, 'contacts.json');
if (!fs.existsSync(contactsFile)) {
  fs.writeFileSync(contactsFile, '[]');
}

// ------------------ ROUTES ------------------

// USER SIGNUP
app.post('/api/signup', async (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { name }]
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ❌ DO NOT hash here
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "success",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
});
app.post("/api/enroll", auth, async (req, res) => {
  try {
    const {
      studentId,
      emailId,
      mobileNumber,
      parentMobileNumber,
      dateOfBirth,
    } = req.body;

    // ✅ Phone validation
    if (mobileNumber.length !== 10 || parentMobileNumber.length !== 10) {
      return res.status(400).json({
        message: "Mobile numbers must be exactly 10 digits",
      });
    }

    // ✅ Duplicate check
    const existing = await course.findOne({
      $or: [{ studentId }, { emailId }],
    });

    if (existing) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    // ✅ Save
    const newCourse = new course({
      ...req.body,
      dateOfBirth: new Date(dateOfBirth),
    });

    await newCourse.save();

    res.status(201).json({ message: "Enrollment successful" });
  } catch (err) {
    console.error("ENROLL ERROR:", err);

    if (err.code === 11000) {
      return res.status(400).json({
        message: "Student ID or Email already exists",
      });
    }

    res.status(500).json({
      message: "Enrollment failed",
      error: err.message,
    });
  }
});


// USER LOGIN
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ name: username });
   
    if (!user) return res.status(404).json({ message: "User not found" });

    const isValid = await user.comparePassword(password);
    if (!isValid) return res.status(401).json({ message: "Invalid credentials" });
console.log("is",isValid)
    const token = jwt.sign({ id: user._id }, "divyansh", { expiresIn: "3d" });
    res.json({ token, name: user.name, email: user.email, message: "success" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
});

// ADMIN LOGIN
app.post("/api/adminlogin", async (req, res) => {
  const { username, password } = req.body;
console.log(req.body)
  try {
    // ✅ get admin from database
    const admin = await Admins.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: "Invalid admin username" });
    }

    // ✅ compare hashed password
    const match = await bcrypt.compare(password, admin.password);
console.log(match)
    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ✅ generate token
    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      "divyansh",
      { expiresIn: "1h" }
    );

    res.json({ message: "success", token });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ message: "Admin login failed" });
  }
});
app.get("/api/admin/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 }); // latest first

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error("Fetch contacts error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
    });
  }
});
// TEST ROUTE TO GET USERS

import Contact from "./Contact.js";
// Contact form endpoint — stores submissions to data/contacts.json
app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await Contact.create({ fullName, email, message });

    res.status(201).json({
      message: "Contact saved",
      contact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save contact" });
  }
});
app.get("/start", (req, res) => {
  console.log("Someone visited the homepage!");
  res.send("Welcome to the homepage!");
});
import auth2 from "./auth2.js";

app.get("/api/admin/me", auth2, (req, res) => {
  res.json({ loggedIn: true, admin: req.admin });
});

/* 📚 Get Enrolled Students (Course Data) */
app.get("/api/admin/courses", auth2, async (req, res) => {
  const courses = await course.find().sort({ createdAt: -1 });
  res.json(courses);
});

/* 👤 Get Registered Users */
app.get("/api/admin/users", auth2, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// ------------------ DATABASE & SERVER ------------------
// mongoose.connect('mongodb://127.0.0.1:27017/NKSkills')
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 30000,
})
.then(() => console.log("MongoDB connected"))
.catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});
// console.log("MONGODB_URI:", process.env.MONGODB_URI);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
