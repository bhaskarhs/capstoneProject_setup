import express from "express";
import "dotenv/config";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { homeRoute } from "./routes/home.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//all middlewares
app.use(express.static(join(__dirname, "public", "client/build")));

//all routes
app.get("/",homeRoute );

//dbconnections
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PORT started at ${PORT}`);
});
