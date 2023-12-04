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

router.post("/rating", (req, res) => {
  res.json({ message: "from rating" });
});

router.post("/watchlist", (req, res) => {
  res.json({ message: "from post register" });
});
router.get("/watchlist", (req, res) => {
  res.json({ message: "from get watchlist" });
});

router.get("/movies", movies);
router.post("/movie/:movie_id", (req, res) => {
  res.json({ message: "from movie" });
});

export default router;
