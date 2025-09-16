import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Video from "./models/Video.js";
import backendDummyData from "./backendDummyData.js";

connectDB();

const importData = async () => {
  await Video.deleteMany(); // clear old
  await Video.insertMany(backendDummyData);
  console.log("Dummy Data Imported");
  mongoose.connection.close();
};

importData(); 


