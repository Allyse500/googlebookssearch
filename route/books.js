const router = require('express').Router();
let Book = require('../model/books.model');

router.route('/').get((req,res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/save').post((req,res) => {
    const book = req.body.book;
    const newBook = new Book({book});

newBook.save()
    .then(()=> res.json('Book added!'))
    .catch(err=> res.status(400).json('Error: ' + err));
});