
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { db } from "../prisma/db.ts";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name,username,password } = req.body ?? {};

    // Validate input
    if (
      typeof name !== "string" ||
      typeof username !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !username.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    // Check whether username already exists
    const existingUser = await db.orm.public.User.first({
      username: username.trim(),
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await db.orm.public.User.create({
      name: name.trim(),
      username: username.trim(),
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body ?? {};

    // Validate input
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Name, username and password are required",
      });
    }

    // Find user
    const user = await db.orm.public.User.first({
      username: username.trim(),
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Compare password with stored hash
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Ensure JWT secret is configured
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not configured");

      return res.status(500).json({
        message: "Internal server error",
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
// Allow authenticated drivers only
router.get(
  "/driver-only",
  authenticate,
  authorize("DRIVER"),
  (req, res) => {
    res.json({
      message: "Welcome Driver",
      user: req.user,
    });
  }
);
// Allow authenticated admin only
router.get(
  "/admin-only",
  authenticate,
  authorize("ADMIN"),
  (req, res) => {
    res.json({
      message: "Welcome Admin",
      user: req.user,
    });
  }
);
// Test authentication: Allow any authenticated user
router.get("/test-auth", authenticate, (req, res) => {
  res.json({
    message: "Authentication successful",
    user: req.user,
  });
});


export default router;
