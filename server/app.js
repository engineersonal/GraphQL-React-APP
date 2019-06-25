const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//Allow cross-origin requests
app.use(cors());

//Connect to mlab database
mongoose.connect(
  "mongodb://engineersonal:test1234@ds117739.mlab.com:17739/gql-sonal",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
