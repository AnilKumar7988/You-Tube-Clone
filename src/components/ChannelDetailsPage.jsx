import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { VscAccount } from 'react-icons/vsc';

const dummyVideos = [
  { id: 1, title: "Dummy Video 1", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "Dummy Video 2", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, title: "Dummy Video 3", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const ChannelDetailsPage = () => {
  const [user, setUser] = useState(null);
  const [channelName, setChannelName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);

    const params = new URLSearchParams(location.search);
    setChannelName(params.get("channelName"));
  }, [location]);

  return (
    <div className="min-h-screen pt-24 px-4 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
      <VscAccount className="text-5xl" />
        <h1 className="text-2xl font-bold">{channelName}</h1>
        {user && <p className="text-gray-600 ">{user.username} • {user.email}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {dummyVideos.map((v) => (
          <div key={v.id} className="flex flex-col gap-2 border rounded-lg p-2">
            <iframe src={v.videoUrl} className="w-full h-48 rounded-lg" allowFullScreen></iframe>
            <h3 className="text-sm font-semibold">{v.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelDetailsPage;
