import mongoose from "mongoose";

// let mongoDbURL = "mongodb://localhost:27017/flixxit"; //localdburl

const connectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://bhaskar:bhaskar123@capstone.9f265vo.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

export default connectDB;
