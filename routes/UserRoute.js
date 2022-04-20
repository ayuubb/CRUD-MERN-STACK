import express from 'express';
import {
  getUsers,
  getUsersById,
  addUser,
  updateUser,
  deleteUser,
} from '../controller/UserController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', addUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
