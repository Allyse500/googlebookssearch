const express = require("express");
const mongoose = require("mongoose");
const morgan = require ('morgan');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = 3000 || process.env.PORT;


// Define middleware here
app.use(express.json());
app.use(cors());
app.use(morgan('short'));
app.use(express.static('./client/public'));

//connect to mongoDB

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const booksRouter = require('./route/books');
const usersRouter = require('./route/users');

app.use('/books', booksRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

