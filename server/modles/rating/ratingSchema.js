import { model, Schema } from "mongoose";

const RatingSchema = new Schema({
  rating: Number,
  bookingId: String,
  userId: String,
});

export const Rating = model("RatingSchema", RatingSchema);
