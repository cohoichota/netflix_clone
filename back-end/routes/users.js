const express = require('express');

const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

const {
   updateUser,
   deleteUser,
   getUser,
   getAllUsers,
   getStats,
} = require('../controllers/users');

//Update
router.put('/:id', verifyToken, updateUser);

//Delete
router.delete('/:id', verifyToken, deleteUser);

//Get
router.get('/find/:id', getUser);

//Get all - only isAdmin
router.get('/', verifyToken, getAllUsers);

//Get user stats ?new=true
router.get('/stats', getStats);

module.exports = router;
