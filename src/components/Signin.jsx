import React from "react";
import { PiGoogleLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Signin() {
  return (
    <>
      <div className="flex justify-center m-5 p-5">
        <div className="w-[40%] border p-2">
          <center>
            <h1 className="text-3xl font-bold">Welcome Back !</h1>
            <p className="text-xl w-[80%]">
              To keep connected with us please login with your personal info
            </p>
            <button className="border rounded-full p-3 px-5 bg-blue-500 text-white m-2 ">
              SIGN IN
            </button>
          </center>
        </div>
        <div className="border p-2 w-[40%]">
          <center>
            <form action="">
              <h1 className="text-2xl">Create Account</h1>
              <div className="flex justify-center items-center">
                <PiGoogleLogoFill className="text-3xl m-2" />
                <FaFacebook className="text-2xl m-2" />
                <FaLinkedin className="text-2xl m-2" />
              </div>
              <input
                type="text"
                placeholder="Username"
                required
                className="border-b w-[50%] m-2 outline-none"
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                required
                className="border-b w-[50%] m-2 outline-none"
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                required
                className="border-b w-[50%] m-2 outline-none"
              />
              <br />
              <button className="border rounded-full p-3 px-5 bg-blue-500 text-white m-2">
                SIGN UP
              </button>
            </form>
          </center>
        </div>
      </div>
    </>
  );
}

export default Signin;
