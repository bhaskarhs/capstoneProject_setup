import mongoose from "mongoose";

const connectToDb = () =>
  mongoose.connect(
    `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0-wgnv8.mongodb.net/test?retryWrites=true&w=majority`
  );

export default connectToDb;
