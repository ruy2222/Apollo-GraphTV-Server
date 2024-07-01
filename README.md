# Apollo GraphTV Server🚀

![GitHub Issues](https://img.shields.io/github/issues/Jagoda11/Apollo-GraphTV-Server?style=flat-square&color=orange)
![Last Commit](https://img.shields.io/github/last-commit/Jagoda11/Apollo-GraphTV-Server/main?style=flat-square&color=blue)
![Build Status](https://github.com/Jagoda11/Apollo-GraphTV-Server/actions/workflows/main.yml/badge.svg)
![License](https://img.shields.io/github/license/Jagoda11/Apollo-GraphTV-Server?style=flat-square&color=green)


Welcome to My GraphQL Apollo Server! This project is a simple yet powerful GraphQL server built with Apollo Server, Node.js, and TypeScript. It serves as a mock API for managing TV shows data, allowing users to query information about various TV shows.

## Features 🌟

- Provides a GraphQL API for querying TV show data 📺
- Mocks data for TV shows, including titles, IDs, and number of seasons 📊
- Supports queries to retrieve all TV shows or specific TV shows by ID 🔍

## How to Use 🛠

1. Clone the repository to your local machine. 👨‍💻
2. Install dependencies using `npm install`. 📦
3. Start the server using `npm start`. 🎬
4. Visit `http://localhost:4000` in your browser to access the GraphQL Playground. 🌐
5. Use GraphQL queries to interact with the API and retrieve TV show data. 📬

## Sample Queries 📝

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


## Contributing  🤝

Contributions are welcome! If you'd like to contribute to this project, please see the contribution guidelines
for more information.

## License  📄

This project is licensed under the MIT License.

---

I included this section to provide a playful analogy that illustrates how our GraphQL server operates using the familiar concept of a vending machine. By comparing technical concepts to everyday experiences, we aim to make our project more approachable and enjoyable for everyone.

## How it Works: A Playground and a Magical Vending Machine🎈

### The Vending Machine (Server)🏧

Imagine your GraphQL server as a magical vending machine in a playground. It's a special machine that can give you toys, snacks, or anything you ask for!

### The Buttons (Queries and Mutations)🔘

On the vending machine, there are colorful buttons with pictures and words. These buttons let you choose what you want from the machine. Pressing a button is like making a query or mutation in GraphQL. You're asking the machine for something specific, like "Give me a toy" or "Change the song."

### The Toy Dispenser (Resolvers) 🧸

Inside the vending machine, there are tiny helpers called "Toy Dispensers." Each Toy Dispenser knows how to get a different toy from the magical toy room. When you press a button, the Toy Dispenser gets the toy you asked for and gives it to you. These Toy Dispensers are like resolvers in GraphQL. They know how to find and give you the right information based on your request.

### The Playground (Client)🎠

You're the kid playing in the playground. When you want something from the vending machine, you walk up to it and press a button. The vending machine (server) listens to you and gives you what you asked for.

### The Magic (GraphQL)✨

The magic in the playground is GraphQL! It helps you talk to the vending machine (server) and get what you want easily. You just need to press the right buttons, and the machine knows exactly what to do.

So, just like playing in the playground with a magical vending machine, using GraphQL is like having a fun and easy way to ask for things and get them quickly!
