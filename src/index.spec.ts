import { gql } from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';
import { startServer, stopServer } from './index';

const GET_TV_SHOWS = gql`
  query GetTVShows {
    tvShows {
      id
      title
      seasons
    }
  }
`;

const GET_TV_SHOW_BY_ID = gql`
  query GetTVShowById($id: ID!) {
    tvShow(id: $id) {
      id
      title
      seasons
    }
  }
`;

describe('GraphQL Server', () => {
  let client: GraphQLClient;
  let serverInstance;

  beforeAll(async () => {
    serverInstance = await startServer();
    client = new GraphQLClient(serverInstance.url);
  });

  afterAll(async () => {
    await stopServer();
  });

  it('fetches tv shows', async () => {
    const response: {
      tvShows: Array<{ id: string; title: string; seasons: number }>;
    } = await client.request(GET_TV_SHOWS);
    expect(response.tvShows).toEqual([
      { id: '1', title: 'Family guy', seasons: 3 },
      { id: '2', title: 'South Park', seasons: 5 },
      // Add more shows
    ]);
  });

  it('fetches a specific tv show by id', async () => {
    const response: {
      tvShow: { id: string; title: string; seasons: number };
    } = await client.request(GET_TV_SHOW_BY_ID, { id: '1' });
    expect(response.tvShow).toEqual({
      id: '1',
      title: 'Breaking Bad',
      seasons: 5,
    });
  });

  it('returns null when tv show is not found', async () => {
    const response: {
      tvShow: { id: string; title: string; seasons: number };
    } = await client.request(GET_TV_SHOW_BY_ID, { id: '3' });
    expect(response.tvShow).toBeNull();
  });
});
