import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidenavbar from "./components/Sidenavbar";
import Signin from "./components/Signin";
import HomePage from "./components/HomePage";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import VideoPlayerPage from "./components/VideoPlayerPage";
import ChannelDetailsPage from "./components/ChannelDetailsPage";
import ChannelPage from "./components/ChannelPage";

function App() {
  const [sideNavbar, setSideNavbar] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);

  function toggleSideNavbar(){
    if(sideNavbar){
      setSideNavbar(false);
    }else{
      setSideNavbar(true);
    }
  }

  function toggleSignIn(){
    if(showSignIn){
      setShowSignIn(false);
    }else{
      setShowSignIn(true);
    }
  }
  return (
    <>
      
      <Navbar
        toggleSideNavbar={toggleSideNavbar}
        toggleSignIn={toggleSignIn}
        setSearchItem={setSearchItem}
      />
      {sideNavbar ? <Sidenavbar /> : null}


      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            showSignIn ? (
              <Signin />
            ) : (
              <HomePage searchItem={searchItem} />
            )
          }
        />

        {/* Video Player route */}
        <Route path="/video/:id" element={<VideoPlayerPage />} />
        <Route path="/channel" element={<ChannelPage />} />
          <Route path="/channel-details" element={<ChannelDetailsPage />} />
      </Routes>
   
     
    </>
  );
}

export default App;
