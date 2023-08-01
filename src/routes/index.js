const express = require('express');
const router = express.Router();

const {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo');

const { addUsers, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user');

// Routes todo
router.get('/todos', getTodos);
router.get('/todo/:id', getTodo);
router.post('/todo', addTodo);
router.patch('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

// Routes user
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', addUsers);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser)

module.exports = router;