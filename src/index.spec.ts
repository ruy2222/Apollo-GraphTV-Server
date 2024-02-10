import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { createTestClient } from 'apollo-server-testing';
import { gql } from 'graphql-tag';
import { typeDefs, resolvers } from './index';

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start standalone server for testing
let testServer: { server?: any; url?: string };
beforeAll(async () => {
  testServer = await startStandaloneServer(server, { listen: { port: 4000 } });
});

// Stop server after tests
afterAll(async () => {
  await testServer.server.close();
});

describe('GraphQL Server', () => {
  it('fetches tvShows', async () => {
    const { query } = createTestClient(testServer.server);

    const TV_SHOWS_QUERY = gql`
      query GetTVShows {
        tvShows {
          id
          title
          seasons
        }
      }
    `;

    const res = await query({ query: TV_SHOWS_QUERY });
    expect(res).toMatchSnapshot(); // or you can test specific properties of the response
  });
});
