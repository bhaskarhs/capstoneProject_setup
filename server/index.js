import express from "express";
import "dotenv/config";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { homeRoute } from "./routes/home.js";
import api from "./routes/api/index.js";
import mongoose from "mongoose";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//all middlewares
app.use(express.static(join(__dirname, "public", "client/build")));
app.use(express.json());
//all routes
app.use("/api", api);
app.get("/", homeRoute);
//dbconnections
const PORT = process.env.PORT || 3000;

mongoose
  .connect(`mongodb://localhost:27017/bookshelf`)
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`PORT started at ${PORT}`);
});
