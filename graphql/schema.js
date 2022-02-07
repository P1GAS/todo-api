const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Todo {
      id: ID!
      title: String!
      body: String!
  }

  input createTodoInput {
      title: String!
      body: String!
  }

  input updateTodoInput {
    id: ID!
    title: String!
    body: String!
  }

  type RootQuery {
      getTodo(title: String): Todo
  }

  type RootMutation {
      createTodo(input: createTodoInput!): Todo!
      updateTodo(input: updateTodoInput!): Todo!
      deleteTodo(input: ID!): Boolean!
  }
`);

module.exports = schema;
