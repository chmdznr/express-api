// Import express
import express from "express";
// Import User Controller
import {
    getUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers
} from "../controllers/userController.js";

// Init express router
const router = express.Router();

// Route get semua user
router.get('/users', getUsers);
// Route get user by id
router.get('/users/:id', getUsersById);
// Route create user baru
router.post('/users', createUsers);
// Route update user by id
router.put('/users/:id', updateUsers);
// Route delete user by id
router.delete('/users/:id', deleteUsers);

// export router
export default router;
