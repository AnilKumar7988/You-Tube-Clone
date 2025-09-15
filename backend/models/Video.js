import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userId:String,
    username:String,
    comment:String,
    timestamp:String,
});

const videoSchema = new mongoose.Schema({
    title: String,
  channelLogo: String,
  uploadTime: String,
  views: String,
  author: String,
  videoUrl: String,
  subscriber: String,
  category: String,
  likes: { type: Number, default: 0 },      // numeric
  dislikes: { type: Number, default: 0 }, 
  comments: [commentSchema],
});

const Video = mongoose.model("Video",videoSchema);
export default Video;