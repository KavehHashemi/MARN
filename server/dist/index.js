import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    century: Int
  }

  type Query {
    books: [Book]
  }
`;
const books = [
    {
        title: "Children of Time",
        author: "Adrian Tchaikovsky",
        century: 21,
    },
    {
        title: "East of Eden",
        author: "John Steinbeck",
        century: 20,
    },
];
const resolvers = {
    Query: {
        books: () => books,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
