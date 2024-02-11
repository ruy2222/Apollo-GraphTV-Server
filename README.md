# My GraphQL Apollo Server

Welcome to My GraphQL Apollo Server! This project is a simple GraphQL server built with Apollo Server, Node.js, and TypeScript. It serves as a mock API for managing TV shows data, allowing users to query information about various TV shows.

## Features

- Provides a GraphQL API for querying TV show data
- Mocks data for TV shows, including titles, IDs, and number of seasons
- Supports queries to retrieve all TV shows or specific TV shows by ID

## How to Use

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
4. Visit `http://localhost:4000` in your browser to access the GraphQL Playground.
5. Use GraphQL queries to interact with the API and retrieve TV show data.

## Sample Queries

### Get All TV Shows

```graphql
query {
  tvShows {
    id
    title
    seasons
  }
}
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please see the contribution guidelines
for more information.

## License

This project is licensed under the MIT License.
