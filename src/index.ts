import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'graphql-tag';

// Mock data
const tvShows = [
  { id: '1', title: 'Family guy', seasons: 3 },
  { id: '2', title: 'South Park', seasons: 5 },
  // Add more shows
];

// GraphQL schema definition
const typeDefs = gql`
  type Query {
    tvShows: [TVShow]
    tvShow(id: ID!): TVShow
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
    tvShow: (_: any, args: { id: string }) =>
      tvShows.find((show) => show.id === args.id),
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

let serverInstance: { url: any; server?: any };

async function startServer() {
  serverInstance = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  serverInstance.server = server; // Store the server instance
  console.log(`🚀 Server ready at ${serverInstance.url}`);
  return serverInstance;
}

async function stopServer() {
  await serverInstance.server.stop();
}

if (require.main === module) {
  startServer();
}

export { typeDefs, resolvers, startServer, stopServer };
