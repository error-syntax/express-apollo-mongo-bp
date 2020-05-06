import { ApolloServer, gql } from 'apollo-server-express';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';
import express from 'express';
import mongoose from 'mongoose';

// enable env vars
require('dotenv').config()

const {
  MONGODB_USERNAME,
  MONGODB_PASS,
  MONGODB_URI
} = process.env;

const startServer = async () => {
  // create an instance of express
  const app = express();

  // create a new instance of Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // connecting to MongoDB
  await mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASS}@${MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

  // apply ApolloServer to our express server to handle GraphQL req 
  server.applyMiddleware({ app });

  // starting up the server and listening on a port
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}

startServer();