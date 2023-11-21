import { model, Schema } from "mongoose";

const RatingSchema = new Schema({
  rating: Number,
  bookingId: String,
  userId: String,
  lastModified: { type: Date, default: Date.now },
});

export const Rating = model("RatingSchema", RatingSchema);
