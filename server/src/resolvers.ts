import { Book } from "./models/Book.js";
export const resolvers = {
  Query: {
    books: async () => await Book.find({}),
    introduction: (_, { intro }) => `${intro}`,
  },
};
