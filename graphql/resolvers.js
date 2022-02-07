const Todo = require("../models/Todo");

const resolvers = {
  getTodo: async function ({ title }) {
    if (title) {
      const todosByTitle = await Todo.find({ title });
      return todosByTitle;
    }
    const todos = await Todo.find();
    console.log(todos);
    return todos;
  },
  createTodo: async function ({ input }) {
    const { title, body } = input;

    if (!title || !body) {
      throw Object.assign(new Error(), {
        extensions: {
          code: 403,
          error: { message: "Write title and body" },
        },
      });
    }

    const newTodo = await Todo.create({ title, body });
    return newTodo;
  },
  updateTodo: async function ({ input }) {
    const { id, title, body } = input;

    if (!title || !body || !id) {
      throw Object.assign(new Error(), {
        extensions: {
          code: 403,
          error: { message: "Write correct credentials" },
        },
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, body },
      { returnOriginal: true }
    );
    return updatedTodo;
  },
  deleteTodo: async function ({ input }) {
    const { id } = input;

    if (!id) {
      throw Object.assign(new Error(), {
        extensions: {
          code: 403,
          error: { message: "Write id" },
        },
      });
    }

    const todo = await Todo.findById(id);

    if (!todo) {
      throw Object.assign(new Error(), {
        extensions: {
          code: 404,
          error: { message: "Todo is not found" },
        },
      });
    }

    return true;
  },
};

module.exports = resolvers;
