import { Book } from "./models/Book.js";
export const resolvers = {
    Query: {
        books: async () => await Book.find({}),
        introduction: (_, { intro }) => `${intro}`,
    },
};
// const books = [
//   {
//     title: "Children of Time",
//     author: "Adrian Tchaikovsky",
//     year: 2015,
//     id: 2,
//   },
//   {
//     title: "East of Eden",
//     author: "John Steinbeck",
//     year: 1952,
//     id: 2,
//   },
// ];
