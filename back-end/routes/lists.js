const express = require('express');

const verifyToken = require('../middlewares/verifyToken');

const { createList, deleteList, getList } = require('../controllers/lists');

const router = express.Router();

// Create list
router.post('/', verifyToken, createList);

// Delete list
router.delete('/:id', verifyToken, deleteList);

// Get list ?type=a&genre=b
router.get('/', verifyToken, getList);

module.exports = router;
