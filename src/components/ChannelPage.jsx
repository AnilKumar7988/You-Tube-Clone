import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ChannelPage = () => {
  const [channelName, setChannelName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  if (!user) return <p className="pt-24 text-center">Please login to create a channel</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 px-4">
      <h1 className="text-2xl font-bold mb-6">Create Your Channel</h1>
      <form className="flex flex-col w-full max-w-md gap-4 p-6 border rounded-lg shadow-md bg-white">
        <label className="flex flex-col text-sm font-medium">
          Username
          <input type="text" value={user.username} disabled className="border p-2 mt-1 rounded" />
        </label>

        <label className="flex flex-col text-sm font-medium">
          Channel Name
          <input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Enter channel name"
            className="border p-2 mt-1 rounded"
            required
          />
        </label>

        {channelName && (
          <Link
            to={`/channel-details?channelName=${channelName}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
          >
            Create Channel
          </Link>
        )}
      </form>
    </div>
  );
};

export default ChannelPage;
