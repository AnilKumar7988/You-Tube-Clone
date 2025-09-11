import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidenavbar from "./components/Sidenavbar";
import Signin from "./components/Signin";
import HomePage from "./components/HomePage";





function App() {
  const [sideNavbar, setSideNavbar] = useState(false);

  function toggleSideNavbar(){
    if(sideNavbar){
      setSideNavbar(false);
    }else{
      setSideNavbar(true);
    }
  }
  return (
    <>
      <Navbar toggleSideNavbar = {toggleSideNavbar} />
    {sideNavbar ? <Sidenavbar /> : null}
      <HomePage />
      <Signin />
    </>
  );
}

export default App;
