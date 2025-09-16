import express  from 'express';
import { getVideos, getVideoById, addVideo, addComment,editComment,deleteComment, updateVideo, deleteVideo, } from '../controllers/videoController.js';
import { protect } from '../middleware/authMiddleware.js';
import Video from '../models/Video.js';

const router = express.Router();

router.get("/", getVideos);
router.get("/:id", getVideoById); 

router.post("/", addVideo);
router.put("/:id",updateVideo);
router.delete("/:id",deleteVideo);

router.post("/:id/comments", protect, addComment);               // add
router.put("/:id/comments/:commentId", protect, editComment);    // edit
router.delete("/:id/comments/:commentId", protect, deleteComment);

router.post("/:id/like", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    video.likes = (video.likes || 0) + 1;
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Dislike a video
router.post("/:id/dislike", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    video.dislikes = (video.dislikes || 0) + 1;
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;