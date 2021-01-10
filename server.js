const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
var APIKEY = process.env.REACT_APP_APIKEY;
const cors = require('cors');

// require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// const uri = process.env.ATLAS_URI;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// mongoose.connect(uri, { userNewUrlParser: true, useCreateIndex: true });

// const connection = mongoose.connection;
// connection.once('open', ()=> {
//   console.log ("MongoDB database connection successful")
// })
// Define API routes here

// const booksRouter = require('./routes/api/books');//what I last entered
// app.use('/saved', booksRouter);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
