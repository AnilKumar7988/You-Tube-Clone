// import express from 'express';

// import User from '../models/UserSchema.js';

// const router = express.Router();

// router.post("/register", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     const user = new User({ username, email, password });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully", user });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user || user.password !== password) {
//       return res.status(400).json({ error: "Invalid email or password" });
//     }

//     res.json({ message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;

// backend/routes/auth.js   (or wherever your route file lives)
import express from "express";
import { register, login } from "../controllers/authControllers.js";  // ✅ correct

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;


