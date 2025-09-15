import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function HomePage({ searchItem }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/videos")
    .then((res)=>res.json())
    .then((data) => setVideos(data))
    .catch((err)=> console.log("Error in fetching videos :" , err));
  }, []);

  const navigate = useNavigate();

  const filteredVideos = videos.filter((video) => {
    if (!searchItem) return true; // Show all if search is empty
    return (
      video.title.toLowerCase().includes(searchItem) ||
      video.author.toLowerCase().includes(searchItem) ||
      video.category.toLowerCase().includes(searchItem)
    );
  });

  return (
    <div className="flex flex-wrap m-5 pt-24">
      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <div
            key={video._id}
            onClick={()=>navigate(`/video/${video._id}`)}
            className="rounded-xl m-5 w-110 shadow-2xl h-110"
          >
            <iframe
              src={video.videoUrl}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-70 rounded-lg shadow-lg border-2 border-gray-300"
            ></iframe>

            <div className="flex m-2 gap-2">
              <img src={video.channelLogo} alt="" className="w-15 h-11" />
              <div>
                <h2 className="text-xl">{video.title}</h2>
                <p className="font-bold mt-2">{video.author}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>{video.views} views</p>
                  <p>{video.uploadTime}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-gray-500 w-full">
          No videos found
        </p>
      )}
    </div>
  );
}

export default HomePage;
