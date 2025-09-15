// backend/middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 1) Get token from header
      token = req.headers.authorization.split(" ")[1];

      // 2) Verify token
      const decoded = jwt.verify(token, "mysecretkey"); // use env variable in real projects

      // 3) Attach user to request
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};
