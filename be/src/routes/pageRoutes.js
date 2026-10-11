import express from "express";


const router = express.Router();

router.get("/signin", (req, res) => {
  res.json({
    message: "Sign in page",
  });
});

router.get("/home", (req, res) => {
  res.json({
    message: "Home page",
  });
});

export default router;