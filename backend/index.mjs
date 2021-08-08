import jwt from "jsonwebtoken";
import { ApolloServer } from "apollo-server";
import schema from "./graphql/schemaQL.mjs";
const server = new ApolloServer(schema);

/*****Server Listen*/
server.listen(3001).then((res) => {
  console.log("server fire at " + res.url + " >_< ");
});
