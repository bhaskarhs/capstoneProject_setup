import mongoose from "mongoose";

let mongoDbURL = "mongodb://localhost:27017/flixxit"; //localdburl

const connectDB = async () => {
  await mongoose.connect(mongoDbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
