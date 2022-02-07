const express = require("express");
require("dotenv").config();
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

mongoose.connect(process.env.MONGO_URL, (err) => {
  console.log("Mongoose error: " + err);
  if (err) {
    process.exit(1);
  }
});

app.listen(9000, (err) => console.log("Server error: " + err));
