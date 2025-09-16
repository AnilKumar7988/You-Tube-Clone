import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";

function VideoPlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const [loggedUser, setLoggedUser] = useState(null);
  const [token, setToken] = useState(null);

  // Keep loggedUser and token 
  useEffect(() => {
    const fetchUser = () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      const savedToken = localStorage.getItem("token");
      setLoggedUser(userData);
      setToken(savedToken);
    };

    fetchUser();
    window.addEventListener("storage", fetchUser);

    return () => window.removeEventListener("storage", fetchUser);
  }, []);

  // Fetch main video
  useEffect(() => {
    fetch(`http://localhost:5000/api/videos/${id}`)
      .then((res) => res.json())
      .then((data) => setVideo(data))
      .catch((err) => console.log("Error fetching video:", err));
  }, [id]);

  // Fetch related videos
  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((res) => res.json())
      .then((data) => setRelatedVideos(data.filter((v) => v._id !== id)))
      .catch((err) => console.log("Error fetching related videos:", err));
  }, [id]);

  // Add comment
  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    if (!loggedUser || !token) {
      alert("Please login to comment.");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/videos/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ comment: commentText }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setVideo(data);
        setCommentText("");
      } else {
        alert(data.error || "Could not add comment");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while adding comment");
    }
  };

  // Edit comment
  const handleEditClick = (c) => {
    if (!loggedUser || !token) {
      alert("Please login to edit your comment.");
      return;
    }
    if (c.userId !== loggedUser._id) {
      alert("You can only edit your own comments.");
      return;
    }
    setEditingCommentId(c._id);
    setEditingText(c.comment);
  };

  const handleSaveEdit = async (commentId) => {
    if (!editingText.trim()) return;
    try {
      const res = await fetch(
        `http://localhost:5000/api/videos/${id}/comments/${commentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ comment: editingText }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setVideo(data);
        setEditingCommentId(null);
        setEditingText("");
      } else {
        alert(data.error || "Could not edit comment");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while editing comment");
    }
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditingText("");
  };

  // Delete comment
  const handleDeleteComment = async (commentId) => {
    if (!loggedUser || !token) {
      alert("Please login to delete comments.");
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:5000/api/videos/${id}/comments/${commentId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      if (res.ok) setVideo(data);
      else alert(data.error || "Could not delete comment");
    } catch (err) {
      console.error(err);
      alert("Network error while deleting comment");
    }
  };

  // Like/Dislike
  const handleLike = async () => {
    if (!video || !loggedUser || !token) return;
    try {
      const res = await fetch(`http://localhost:5000/api/videos/${id}/like`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setVideo(data);
      else alert(data.error || "Could not register like");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDislike = async () => {
    if (!video || !loggedUser || !token) return;
    try {
      const res = await fetch(`http://localhost:5000/api/videos/${id}/dislike`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setVideo(data);
      else alert(data.error || "Could not register dislike");
    } catch (err) {
      console.error(err);
    }
  };

  if (!video) return <p className="text-center text-red-500">Loading...</p>;

  const userId = loggedUser?._id;
  const hasLiked = video.likedBy?.includes(userId);
  const hasDisliked = video.dislikedBy?.includes(userId);

  return (
    <div className="flex flex-col md:flex-row m-2 mt-22 p-2 gap-5">
      {/* Main Video Section */}
      <div className="w-full md:w-[65vw] flex flex-col">
        <iframe
          src={video.videoUrl}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-lg border-2 border-gray-300 w-full h-[68vh]"
        ></iframe>

        {/* Video Details */}
        <div className="mt-3 md:ms-3 flex flex-col gap-3">
          <h2 className="text-xl font-semibold mt-4">{video.title}</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img src={video.channelLogo} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-bold text-lg">{video.author}</p>
              <p className="text-gray-500 text-sm">{video.views} views • {video.uploadTime}</p>
            </div>
            <button className="mt-2 sm:mt-0 sm:ms-5 bg-red-500 rounded-3xl p-1.5 text-white font-bold hover:bg-red-600">Subscribe</button>

            <div className="flex justify-center items-center gap-5 mt-2 sm:mt-0 sm:ms-5 bg-gray-200 p-3 rounded-3xl">
              <button onClick={handleLike} className={`flex items-center gap-2 ${hasLiked ? "font-bold" : ""}`}>
                <FaRegThumbsUp /> {video.likes}
              </button>
              <button onClick={handleDislike} className={`flex items-center gap-2 ${hasDisliked ? "font-bold" : ""}`}>
                <FaRegThumbsDown /> {video.dislikes}
              </button>
            </div>
          </div>

          {/* Comment input */}
          <div className="mt-4">
            {loggedUser ? (
              <div className="flex flex-col gap-2">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full border p-2"
                />
                <button onClick={handleAddComment} className="bg-blue-500 text-white px-4 py-1 rounded">Post Comment</button>
              </div>
            ) : (
              <p>Please sign in to post a comment.</p>
            )}
          </div>

          {/* Comments Section */}
          <div className="comments mt-5 flex flex-col gap-3">
            <h1 className="text-lg font-semibold mb-3">Comments</h1>
            {video.comments?.map((c) => (
              <div key={c._id} className="p-3 border-b flex flex-col sm:flex-row justify-between">
                <div className="w-full sm:w-[80%]">
                  <p className="font-semibold text-lg">{c.username || "Anonymous"}</p>
                  {editingCommentId === c._id ? (
                    <div className="flex flex-col gap-2">
                      <textarea value={editingText} onChange={(e) => setEditingText(e.target.value)} className="w-full border p-2" />
                      <div className="flex gap-2">
                        <button onClick={() => handleSaveEdit(c._id)} className="bg-green-500 text-white px-3 py-1 rounded">Save</button>
                        <button onClick={handleCancelEdit} className="bg-gray-300 px-3 py-1 rounded">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p>{c.comment}</p>
                      <p className="text-sm text-gray-500">{c.timestamp}</p>
                    </>
                  )}
                </div>

                <div className="w-full sm:w-[20%] flex items-start sm:justify-end gap-2 mt-2 sm:mt-0">
                  {loggedUser && c.userId === loggedUser._id && (
                    <button className="p-1 text-xl bg-yellow-100 rounded-lg" onClick={() => handleEditClick(c)} title="Edit your comment">
                      <AiTwotoneEdit />
                    </button>
                  )}
                  {loggedUser && (
                    <button className="p-1 text-xl bg-red-200 rounded-lg" onClick={() => window.confirm("Delete this comment?") && handleDeleteComment(c._id)} title="Delete comment">
                      <MdOutlineDeleteForever />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Videos */}
      <div className="w-full md:w-[35vw] mt-5 md:mt-0">
        {relatedVideos.map((v) => (
          <div key={v._id} onClick={() => navigate(`/video/${v._id}`)} className="flex gap-2 m-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <div className="w-[50%]">
              <iframe src={v.videoUrl} className="w-full h-full rounded-lg border"></iframe>
            </div>
            <div className="w-[50%]">
              <h3 className="text-md font-semibold">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.author}</p>
              <p className="text-xs text-gray-500">{v.views} views • {v.uploadTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayerPage;

