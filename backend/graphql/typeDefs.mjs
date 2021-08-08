import { gql } from "apollo-server";

const typeDefs = gql`
  type Todo {
    name: String!
    completed: Boolean
  }
  type User {
    name: String!
    id: ID!
    token: String!
  }
  input SignUpInput {
    name: String!
    password: String!
  }
  type Query {
    getTodos: [Todo]!
  }
  type Mutation {
    signUp(input: SignUpInput): User!
  }
`;

export default typeDefs;
