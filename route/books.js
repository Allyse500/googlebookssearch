const router = require('express').Router();
let Book = require('../model/books.model');

router.route('/').get((req,res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/save').post((req,res) => {
    const title = req.body.title;
    const author = req.body.author;
    const image = req.body.image;
    const link = req.body.link;

    const newBook = new Book({
        title,
        author,
        image,
        link,
    });

newBook.save()
    .then(()=> res.json('Book added!'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

module.exports = router;