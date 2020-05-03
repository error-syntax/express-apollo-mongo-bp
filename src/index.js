import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

// create an instance of express
const app = express();

// dummy typeDefs for initial setup
//  this will define the model of our queries
const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

// dummy resolver for initial setup
const resolvers = {
  Query: {
    hello: () => 'hello world'
  }
}

// create a new instance of Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


// apply ApolloServer to our express server to handle GraphQL req 
server.applyMiddleware({ app });

// starting up the server and listening on a port
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)