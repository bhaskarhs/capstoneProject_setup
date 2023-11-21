import { Router } from "express";
import register from "./register.js";
import login from "./login.js";
import rating from "./rating.js";
import reading from "./reading.js";
import books from "./books.js";
import book from "./book.js";

const router = Router();

router.post("/register", register);
router.post("/loign", login);
router.post("/rating", rating);
router.post("/reading", reading);
router.get("/books", books);
router.get("/books/:id", book);

export default router;
