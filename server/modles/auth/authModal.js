import { Schema, model } from "mongoose";

const SignUpSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  reEnterPassword: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  lastModified: { type: Date, default: Date.now },
});

const SignInSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  lastModified: { type: Date, default: Date.now },
});

export const SignUp = model("SignUp", SignUpSchema);
export const SingIn = model("SingIn", SignInSchema);
