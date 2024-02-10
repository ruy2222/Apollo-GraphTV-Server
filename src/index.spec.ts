import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { typeDefs, resolvers } from './';

describe('Apollo Server Tests', () => {
  let server;

  beforeAll(async () => {
    server = new ApolloServer({ typeDefs, resolvers });
  });

  afterAll(async () => {
    await server.stop();
  });

  it('should return TV shows', async () => {
    const { query } = createTestClient(server);

    const GET_TV_SHOWS = `
      query {
        tvShows {
          id
          title
          seasons
        }
      }
    `;

    const { data, errors } = await query({ query: GET_TV_SHOWS });

    expect(errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data.tvShows).toBeDefined();
    expect(data.tvShows.length).toBeGreaterThan(0);
  });
});
