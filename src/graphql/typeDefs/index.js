import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Cat {
    id: ID!,
    name: String!
  }

  type Query {
    hello: String!,
    getCats: [Cat!]!,
    getSomeCats(name: String!): [Cat!]
  }


  type Mutation {
    createCat(name: String!): Cat!,
    deleteCats(name: String!): String
  }
`;