const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');

// @route     GET api/todos
// @desc      Get all todos
// @access    Public
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (err) {
    console.error(err.message);
  }
});

// @route     POST api/todos
// @desc      Create NEW Todo
// @access    Public
router.post('/', async (req, res) => {
  try {
    const { text, isCompleted } = req.body;
    const newTodo = await Todo.create({ text, isCompleted });
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
