import { model, Schema } from "mongoose";

const StatusSchema = new Schema({
    statusName:String
})

const TagsSchema = new Schema({
  name: String,
});

const BookReadingSchema = new Schema({
    BookId:String,
    status: [StatusSchema],
    tags:[TagsSchema]
})


export const BookReading = model('BookReading',BookReadingSchema)