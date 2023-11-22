import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  password: { type: String, require: true },
  lastModified: { type: Date, default: Date.now() },
});

const User = model("User", userSchema);

export default User;
