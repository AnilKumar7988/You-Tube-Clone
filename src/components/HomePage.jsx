import React, { useEffect, useState } from "react";
import dummyData from "../utils/dummyData";

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setVideos(dummyData);
  }, []);

  return (
    <div className="flex flex-wrap m-5">
      {videos.map((video) => (
        <div key={video.id} className="rounded-xl m-5  w-110 shadow-2xl h-110">
          <iframe src={video.videoUrl}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-70 rounded-lg shadow-lg border-2 border-gray-300"
           ></iframe>

          <div className="flex m-2 gap-2">
            <div>
              <img src={video.channelLogo} alt="" className="w-15 h-11" />
            </div>
            <div>
              <h2 className="text-xl">{video.title}</h2>
              <p>{video.description}</p>
              <p className="font-bold mt-2">{video.author}</p>
              <div className="flex justify-between text-sm text-gray-600">
                <p>{video.views} views</p>
                <p>{video.uploadTime}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
