const express = require('express');

const verifyToken = require('../middlewares/verifyToken');

const {
   createMovie,
   updateMovie,
   deleteMovie,
   getMovie,
   getRandomMovie,
   getAllMovies,
} = require('../controllers/movies')

const router = express.Router();

// Create new movie
router.post('/', verifyToken, createMovie);

//Update
router.put('/:id', verifyToken, updateMovie);

// Delete
router.delete('/:id', verifyToken, deleteMovie);

// Get a movie
router.get('/find/:id', verifyToken, getMovie);

// Get random movie ?type=series
router.get('/random', verifyToken, getRandomMovie);

// Get all movies
router.get('/', verifyToken, getAllMovies);

module.exports = router;
