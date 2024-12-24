const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/UserController');

const router = express.Router();

// Define routes for user-related operations
router.post('/', createUser); // Create a user
router.get('/', getAllUsers); // Get all users
router.get('/:id', getUserById); // Get a user by ID
router.put('/:id', updateUser); // Update a user
router.delete('/:id', deleteUser); // Delete a user

module.exports = router;
