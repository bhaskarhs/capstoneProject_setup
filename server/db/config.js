import mongoose from "mongoose";

const db = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/mydb",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected!");
    return connection;
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default db;
