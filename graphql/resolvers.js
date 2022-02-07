const Todo = require("../models/Todo");

// createTodo
// updateTodo
// deleteTodo

const resolvers = {
  getTodo: async function ({ title }) {
    if (title) {
      const todosByTitle = await Todo.find({ title });
      return todosByTitle;
    }
    const todos = await Todo.find();
    return todos;
  },
  createTodo: async function ({input}) (
    const { title, body } = input
  )
};
