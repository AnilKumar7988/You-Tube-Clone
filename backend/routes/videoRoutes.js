import express  from 'express';
import { getVideos, getVideoById, addVideo, addComment,editComment,deleteComment, updateVideo, deleteVideo,   toggleLike,
  toggleDislike, } from '../controllers/videoController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get("/", getVideos);
router.get("/:id", getVideoById); 

router.post("/", addVideo);
router.put("/:id",updateVideo);
router.delete("/:id",deleteVideo);

router.post("/:id/comments", protect, addComment);               // add
router.put("/:id/comments/:commentId", protect, editComment);    // edit
router.delete("/:id/comments/:commentId", protect, deleteComment);

// Likes / Dislikes (protected)
router.post("/:id/like", protect, toggleLike);
router.post("/:id/dislike", protect, toggleDislike);

export default router;