const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooks = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", googlebooks);

module.exports = Book;
