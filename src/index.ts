import { ApolloServer, gql } from 'apollo-server';
import { getTVShows } from './mockAWS';

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

const resolvers = {
  Query: {
    tvShows: async () => getTVShows(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
export { typeDefs, resolvers };
