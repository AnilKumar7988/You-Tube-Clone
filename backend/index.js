import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import videoRoutes from "./routes/videoRoutes.js";
import Video from './models/Video.js';
import authRoutes from "./routes/authRoutes.js";
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Backend is working")
})


app.get("/api/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.use("/api/videos", videoRoutes);

// mongoose.connect("mongodb://127.0.0.1:27017/UsersDetails")
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.log(err));

app.use("/api/auth", authRoutes)

connectDB();

app.listen(5000,()=>{
    console.log("Connection successfull");
});