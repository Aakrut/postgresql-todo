const express = require('express');
const { getTodos, createTodo, deleteTodos, getTodo, updateTodo, deleteTodo } = require('../controller/todo');

const router = express.Router();

router.route('/').get(getTodos).post(createTodo).delete(deleteTodos)

router.route('/:id').get(getTodo).patch(updateTodo).delete(deleteTodo)

module.exports = router;