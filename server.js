const express = require("express");
const mongoose = require("mongoose");
const morgan = require ('morgan');
const path = require("path");
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const PORT = process.env.PORT || 3001;
const app = express();

// var APIKEY = process.env.REACT_APP_APIKEY;

require('dotenv').config();

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('short'));
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

const uri = encodeURI(process.env.MONGODB_URI);//passes or understands this line

//console.log(encodeURIComponent(uri));

const client = new MongoClient(uri || "mongodb://localhost:27017/googlebookssearch",
 { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("googlebookssearch").collection("devices");
  // perform actions on the collection object
  console.log("Connected correctly to server");
  client.close();
});

// Connect to the Mongo DB
// mongoose.connect(uri, //|| "mongodb://localhost/googlebooks",
// { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, 
//   useUnifiedTopology: true});

// mongoose.connect(uri, { userNewUrlParser: true, useCreateIndex: true });

// const connection = client.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// client.once('open', () => {
//   console.log("MongoDB database connection established successfully from client");
// })

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// }).on('error', function (err) {
//   console.log(err);
// });


// Define API routes here

// const booksRouter = require('./route/books');//what I last entered
// app.use('/saved', booksRouter);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
