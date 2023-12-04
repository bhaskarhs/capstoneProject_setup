import express from "express";
import "dotenv/config";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import connectDB from "./db/index.js";
import api from "./routes/index.js";
import cors from 'cors';



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//all middlewares
app.use(express.static(join(__dirname, "public", "client/build")));
app.use(express.json());
app.use(cors())
//all routes

app.use("/api", api);
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "client/build"));
});

//dbconnections
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch((e) => console.log(e));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PORT started at ${PORT}`);
});
