import React, { useState } from "react";

function Signin({ show, onClose, setUser }) {
  const [isRegister, setIsRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegister
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const body = isRegister ? { username, email, password } : { email, password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
console.log("Login response data:", data);

      if (res.ok) {
        const { user, token } = data;
        // 🔑 Save user (remove password before storing)
  const cleanedUser = { _id: user._id, username: user.username, email: user.email };
        localStorage.setItem("user", JSON.stringify(cleanedUser));
        localStorage.setItem("token", token);
        if (setUser) setUser(cleanedUser);
         window.dispatchEvent(new Event("storage"));
        onClose();
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="rounded-xl p-5 w-[90%] sm:w-[400px] bg-sky-100">
        <button
          onClick={onClose}
          className="text-red-500 float-right text-lg font-bold"
        >
          X
        </button>

        {isRegister ? (
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-semibold mb-3">Create Account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border-b w-[80%] m-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-b w-[80%] m-2 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-b w-[80%] m-2 outline-none"
              />
              <button className="border rounded-full p-2 px-5 bg-blue-500 text-white mt-3">
                Register
              </button>
            </form>
            <p className="mt-3 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => setIsRegister(false)}
                className="text-blue-600 underline"
              >
                Sign In
              </button>
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-semibold mb-3">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-b w-[80%] m-2 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-b w-[80%] m-2 outline-none"
              />
              <button className="border rounded-full p-2 px-5 bg-blue-500 text-white mt-3">
                Sign In
              </button>
            </form>
            <p className="mt-3 text-sm">
              Don’t have an account?{" "}
              <button
                onClick={() => setIsRegister(true)}
                className="text-blue-600 underline"
              >
                Register
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signin;
