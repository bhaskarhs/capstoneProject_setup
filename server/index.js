import express from "express";
import "dotenv/config";

const app = express();
//all middlewares

//all routes


//dbconnections
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PORT started at ${PORT}`);
});
