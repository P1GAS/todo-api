const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const app = express();

const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

start = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(9000);
};

start();
