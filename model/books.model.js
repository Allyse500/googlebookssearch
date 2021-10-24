const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  username: {type: String, required: true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String, required: true},
  image: { data: Buffer, contentType: String},
  link: { type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
