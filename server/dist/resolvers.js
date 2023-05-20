import { Book } from "./models/Book.js";
export const resolvers = {
    Query: {
        books: async () => await Book.find({}),
        introduction: (_, { intro }) => `${intro}`,
    },
    Mutation: {
        create: async (_, { title, author, year }) => {
            const newBook = new Book({
                title,
                author,
                year,
            });
            await newBook.save();
            return newBook;
        },
        delete: async (_, { id }) => {
            const result = await Book.deleteOne({ _id: id });
            if (result.acknowledged && result.deletedCount === 1) {
                return id;
            }
            return null;
        },
    },
};
