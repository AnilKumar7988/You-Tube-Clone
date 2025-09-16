import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { CgPlayListSearch } from "react-icons/cg";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { FiMusic } from "react-icons/fi";
import { PiFilmSlate } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePodcasts } from "react-icons/md";
import { MdOutlineNewspaper } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { MdOutlineReport } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

function Sidenavbar() {
  return (
    <>
      <div className="bg-gray-100 w-[70%] sm:w-[50%] md:w-[20%] p-5 rounded-4xl h-screen overflow-y-auto fixed top-21 z-40 shadow-xl">
        <div>
          <ul>
            <li className="flex items-center gap-2 m-1 hover:bg-gray-300 rounded-xl">
              <AiOutlineHome className="text-2xl" />
              <Link to="/" className="text-lg ">Home</Link>
            </li>
            <li className="flex items-center gap-2 m-1">
              <SiYoutubeshorts className="text-2xl" />
              <p className="text-lg">Shorts</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdOutlineSubscriptions className="text-2xl" />
              <p className="text-lg">Subscriptions</p>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-2xl">You</h1>
          <ul>
            <li className="flex items-center gap-2 m-1">
              <LuHistory className="text-2xl" />
              <p className="text-lg">History</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <CgPlayListSearch className="text-2xl" />
              <p className="text-lg">Playlists</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdOutlineVideoSettings className="text-2xl" />
              <p className="text-lg">Your Videos</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdOutlineWatchLater className="text-2xl" />
              <p className="text-lg">Watch Later</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <AiOutlineLike className="text-2xl" />
              <p className="text-lg">Liked Videos</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <AiOutlineDownload className="text-2xl" />
              <p className="text-lg">Downloads</p>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-2xl">Explore </h1>
          <ul>
            <li className="flex items-center gap-2 m-1">
              <AiOutlineShopping className="text-2xl" />
              <p className="text-lg">Shopping</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <FiMusic className="text-2xl" />
              <p className="text-lg">Music</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <PiFilmSlate className="text-2xl" />
              <p className="text-lg">Films</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdLiveTv className="text-2xl" />
              <p className="text-lg">Live</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <SiYoutubegaming className="text-2xl" />
              <p className="text-lg">Gaming</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdOutlinePodcasts className="text-2xl" />
              <p className="text-lg">Podcasts</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdOutlineNewspaper className="text-2xl" />
              <p className="text-lg">News</p>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-2xl">More from YouTube</h1>
          <ul>
            <li className="flex items-center gap-2 m-1">
              <MdOutlineWorkspacePremium className="text-2xl " />
              <p className="text-lg">YouTube Premium</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <SiYoutubestudio className="text-2xl" />
              <p className="text-lg">YouTube Studio</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <SiYoutubemusic className="text-2xl" />
              <p className="text-lg">YouTube Music</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <TbBrandYoutubeKids className="text-2xl" />
              <p className="text-lg">YouTube Kids</p>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <ul>
            <li className="flex items-center gap-2 m-1">
              <LuSettings className="text-2xl" />
              <p className="text-lg">Settings</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdOutlineReport className="text-2xl" />
              <p className="text-lg">Report history</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdOutlineHelpOutline className="text-2xl" />
              <p className="text-lg">Help</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <MdOutlineFeedback className="text-2xl" />
              <p className="text-lg">Send feedback</p>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <p>&copy; 2025 Google LLC</p>
        </div>
      </div>
    </>
  );
}

export default Sidenavbar;
