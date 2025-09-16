import Video from "../models/Video.js";
import User from "../models/UserSchema.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const addVideo = async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    await newVideo.save();
    res.json({ message: "Video Added", video: newVideo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVideo = await Video.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    res.json({ message: "Video Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a comment (authenticated)
export const addComment = async (req, res) => {
  try {
    const { id } = req.params; // video id
    const { comment } = req.body;
    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    const newComment = {
      userId: req.user._id.toString(),   
      username: req.user.username || "Anonymous",
      comment,
      timestamp: new Date().toLocaleString(),
    };

    video.comments.push(newComment);
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit a comment (only owner can edit)
export const editComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;
    const { comment } = req.body;

    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    const subdoc = video.comments.id(commentId);
    if (!subdoc) return res.status(404).json({ error: "Comment not found" });

    // Only owner may edit
    if (subdoc.userId !== req.user._id.toString()) {
      return res.status(403).json({ error: "You are not the comment owner" });
    }

    subdoc.comment = comment;
    subdoc.timestamp = new Date().toLocaleString();

    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a comment (any logged-in user may delete per your requirement)
export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;
    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    // Filter out the comment to delete
    video.comments = video.comments.filter(c => c._id.toString() !== commentId);

    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle like
export const toggleLike = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id.toString();

    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    // If user already liked -> remove like
    if (video.likedBy && video.likedBy.includes(userId)) {
      video.likedBy = video.likedBy.filter((u) => u !== userId);
    } else {
      // add like
      video.likedBy = video.likedBy ? [...video.likedBy, userId] : [userId];
      // remove from disliked if present
      video.dislikedBy = video.dislikedBy
        ? video.dislikedBy.filter((u) => u !== userId)
        : [];
    }

    video.likes = video.likedBy.length;
    video.dislikes = video.dislikedBy ? video.dislikedBy.length : 0;

    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle dislike
export const toggleDislike = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id.toString();

    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    // If user already disliked -> remove dislike
    if (video.dislikedBy && video.dislikedBy.includes(userId)) {
      video.dislikedBy = video.dislikedBy.filter((u) => u !== userId);
    } else {
      // add dislike
      video.dislikedBy = video.dislikedBy
        ? [...video.dislikedBy, userId]
        : [userId];
      // remove from liked if present
      video.likedBy = video.likedBy ? video.likedBy.filter((u) => u !== userId) : [];
    }

    video.likes = video.likedBy ? video.likedBy.length : 0;
    video.dislikes = video.dislikedBy.length;

    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
