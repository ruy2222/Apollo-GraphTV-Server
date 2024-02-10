import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'graphql-tag';

// Mock data
const tvShows = [
  { id: '1', title: 'Breaking Bad', seasons: 5 },
  { id: '2', title: 'Game of Thrones', seasons: 8 },
  // Add more shows
];

// GraphQL schema definition
const typeDefs = gql`
  type Query {
    tvShows: [TVShow]
  }

  type TVShow {
    id: ID!
    title: String!
    seasons: Int
  }
`;

// Resolvers define how to fetch the data for types in the schema
const resolvers = {
  Query: {
    tvShows: () => tvShows,
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the standalone server
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer();
export { typeDefs, resolvers };
