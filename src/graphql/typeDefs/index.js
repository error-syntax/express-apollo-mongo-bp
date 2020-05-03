import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Cat {
    id: ID!,
    name: String!
  }

  type Query {
    hello: String!,
    getCats: [Cat!]!
  }


  type Mutation {
    createCat(name: String!): Cat!
  }
`;