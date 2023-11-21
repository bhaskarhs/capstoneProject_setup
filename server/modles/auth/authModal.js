import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: { type: String, require: true },
  lastmodified: { type: Date, default: Date.now() },
});

userSchema.pre("save", function (next) {
  if (this.password && this.isModified("password")) {
    bcrypt.hash(this.password, 10, (err, hashed) => {
      if (err) return next(err);
      this.password = hashed;
      next();
    });
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password, cd) {
  bcrypt.compare(password, this.password, (err, result) => {
    return cb(err, result);
  });
};

export const User = model("User", userSchema);
