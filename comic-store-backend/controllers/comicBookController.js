const ComicBook = require('../models/ComicBook');

// Get all comics
exports.getComics = async (req, res) => {
  try {
    const comics = await ComicBook.find();
    res.json(comics);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comics' });
  }
};

// Get a comic by ID
exports.getComicById = async (req, res) => {
  try {
    const comic = await ComicBook.findById(req.params.id);
    if (!comic) return res.status(404).json({ message: 'Comic not found' });
    res.json(comic);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comic' });
  }
};

// Create a new comic
exports.createComic = async (req, res) => {
  const { bookName, authorName, yearOfPublication, price, discount, numberOfPages, condition, description } = req.body;
  try {
    const newComic = new ComicBook({ bookName, authorName, yearOfPublication, price, discount, numberOfPages, condition, description });
    await newComic.save();
    res.status(201).json(newComic);
  } catch (err) {
    res.status(400).json({ message: 'Error creating comic' });
  }
};

// Update an existing comic
exports.updateComic = async (req, res) => {
  try {
    const updatedComic = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedComic) return res.status(404).json({ message: 'Comic not found' });
    res.json(updatedComic);
  } catch (err) {
    res.status(400).json({ message: 'Error updating comic' });
  }
};

// Delete a comic
exports.deleteComic = async (req, res) => {
  try {
    const deletedComic = await ComicBook.findByIdAndDelete(req.params.id);
    if (!deletedComic) return res.status(404).json({ message: 'Comic not found' });
    res.json({ message: 'Comic deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting comic' });
  }
};
