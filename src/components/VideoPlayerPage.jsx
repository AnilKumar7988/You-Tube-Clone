// src/pages/VideoPlayerPage.jsx (replace)
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

  // comment editing state
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const loggedUser = JSON.parse(localStorage.getItem("user") || "null");
  const token = localStorage.getItem("token");

  // Fetch the main video
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
      .then((data) => {
        const filtered = data.filter((v) => v._id !== id);
        setRelatedVideos(filtered);
      })
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

  // Start editing (only owner can edit)
  const handleEditClick = (c) => {
    if (!loggedUser || !token) {
      alert("Please login to edit your comment.");
      return;
    }
    // only owner may edit
    if (c.userId !== loggedUser._id) {
      alert("You can only edit your own comments.");
      return;
    }
    setEditingCommentId(c._id);
    setEditingText(c.comment);
  };

  // Save edited comment
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

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditingText("");
  };

  // Delete comment (any logged-in user allowed)
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
      if (res.ok) {
        setVideo(data);
      } else {
        alert(data.error || "Could not delete comment");
      }
    } catch (err) {
      console.error(err);
      alert("Network error while deleting comment");
    }
  };

  // Like / Dislike handlers (toggle)
  const handleLike = async () => {
    if (!loggedUser || !token) {
      alert("Please login to like.");
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:5000/api/videos/${id}/like`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      if (res.ok) setVideo(data);
      else alert(data.error || "Could not register like");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDislike = async () => {
    if (!loggedUser || !token) {
      alert("Please login to dislike.");
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:5000/api/videos/${id}/dislike`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      if (res.ok) setVideo(data);
      else alert(data.error || "Could not register dislike");
    } catch (err) {
      console.error(err);
    }
  };

  if (!video) {
    return <p className="text-center text-red-500">Loading....</p>;
  }

  // helper to check if current user liked/disliked
  const userId = loggedUser ? loggedUser._id : null;
  const hasLiked = video.likedBy && userId ? video.likedBy.includes(userId) : false;
  const hasDisliked = video.dislikedBy && userId ? video.dislikedBy.includes(userId) : false;

  return (
    <div className="flex m-2 mt-22 p-2 gap-5">
      {/* Main Video Section */}
      <div className="w-[65vw] aspect-video items-center">
        <iframe
          src={video.videoUrl}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-lg border-2 border-gray-300 w-full h-[68vh]"
        ></iframe>

        {/* Video Details */}
        <div className="ms-3">
          <h2 className="text-xl font-semibold mt-4">{video.title}</h2>
          <div className="flex items-center mt-3 gap-5">
            <img
              src={video.channelLogo}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold text-lg">{video.author}</p>
              <p className="text-gray-500 text-sm">
                {video.views} views • {video.uploadTime}
              </p>
            </div>
            <button className="ms-5 bg-red-500 rounded-3xl p-1.5 text-white font-bold hover:bg-red-600">
              Subscribe
            </button>

            <div className="flex justify-center items-center gap-5 ms-5 bg-gray-200 p-3 rounded-3xl">
              <button onClick={handleLike} className={`flex items-center gap-2 ${hasLiked ? "font-bold" : ""}`}>
                <FaRegThumbsUp /> {typeof video.likes === "number" ? video.likes : video.likes}
              </button>
              <button onClick={handleDislike} className={`flex items-center gap-2 ${hasDisliked ? "font-bold" : ""}`}>
                <FaRegThumbsDown /> {typeof video.dislikes === "number" ? video.dislikes : video.dislikes}
              </button>
            </div>
          </div>

          {/* Comment input: only visible if loggedUser exists */}
          <div className="mt-4">
            {loggedUser ? (
              <div>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full border p-2"
                />
                <button
                  onClick={handleAddComment}
                  className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
                >
                  Post Comment
                </button>
              </div>
            ) : (
              <p>Please sign in to post a comment.</p>
            )}
          </div>

          {/* Comments Section */}
          <div className="comments mt-5">
            <h1 className="text-lg font-semibold mb-3">Comments</h1>
            {video.comments &&
              video.comments.map((c) => (
                <div key={c._id} className="p-3 border-b flex justify-between">
                  <div className="w-[80%]">
                    <p className="font-semibold text-lg">
                      {c.username || c.userId || "Anonymous"}
                    </p>

                    {editingCommentId === c._id ? (
                      <div>
                        <textarea
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          className="w-full border p-2"
                        />
                        <div className="mt-2 flex gap-2">
                          <button
                            onClick={() => handleSaveEdit(c._id)}
                            className="bg-green-500 text-white px-3 py-1 rounded"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="bg-gray-300 px-3 py-1 rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p>{c.comment}</p>
                        <p className="text-sm text-gray-500">{c.timestamp}</p>
                      </>
                    )}
                  </div>

                  <div className="w-[20%] flex items-start justify-end">
                    {/* Edit icon: show only if logged-in and owner */}
                    {loggedUser && c.userId === loggedUser._id && (
                      <button
                        className="mx-1 p-1 text-xl bg-yellow-100 rounded-lg"
                        onClick={() => handleEditClick(c)}
                        title="Edit your comment"
                      >
                        <AiTwotoneEdit />
                      </button>
                    )}

                    {/* Delete icon: show only if logged-in (any user can delete) */}
                    {loggedUser && (
                      <button
                        className="mx-1 p-1 text-xl bg-red-200 rounded-lg"
                        onClick={() => {
                          if (window.confirm("Delete this comment?")) {
                            handleDeleteComment(c._id);
                          }
                        }}
                        title="Delete comment"
                      >
                        <MdOutlineDeleteForever />
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Right Side Related Videos */}
      <div className="w-[35vw]">
        {relatedVideos.map((v) => (
          <div
            key={v._id}
            onClick={() => navigate(`/video/${v._id}`)}
            className="flex gap-2 m-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            <div className="w-[50%]">
              <iframe
                src={v.videoUrl}
                className="w-full h-full rounded-lg border"
              ></iframe>
            </div>
            <div className="w-[50%]">
              <h3 className="text-md font-semibold">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.author}</p>
              <p className="text-xs text-gray-500">
                {v.views} views • {v.uploadTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayerPage;
