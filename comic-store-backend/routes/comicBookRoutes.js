const express = require('express');
const { getComics, getComicById, createComic, updateComic, deleteComic } = require('../controllers/comicBookController');

const router = express.Router();

// Route to get all comics
router.get('/comics', getComics);

// Route to get a comic by ID
router.get('/comics/:id', getComicById);

// Route to create a new comic
router.post('/comics', createComic);

// Route to update a comic
router.put('/comics/:id', updateComic);

// Route to delete a comic
router.delete('/comics/:id', deleteComic);

module.exports = router;
