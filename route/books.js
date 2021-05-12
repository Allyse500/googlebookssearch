const router = require('express').Router();
let Book = require('../model/books.model');

router.route('/').get((req,res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/save').post((req,res) => {
    const username = req.body.username;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const image = req.body.image;
    const link = req.body.link;

    const newBook = new Book({
        username,
        title,
        author,
        description,
        image,
        link,
    });

newBook.save()
    .then(()=> res.json('Book added!'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Book.findById(req.params.id)
    .then(book => {
        book.username = req.body.username;
        book.title = req.body.title;
        book.author = req.body.author;
        book.description = req.body.description;
        book.image = req.body.image;
        book.link = req.body.link;

        book.save()
            .then(()=> res.json('Bookshelf updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;