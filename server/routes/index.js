import express from "express";
import movies from "../controllers/movies.js";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.send("profile");
});

router.post("/register", (req, res) => {
  res.json({ message: "from register" });
});

router.post("/login", (req, res) => {
  res.json({ message: "from register" });
});




export default router;
