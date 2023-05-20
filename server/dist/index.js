import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./models/typeDefs.js";
import mongoose from "mongoose";
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
mongoose.set("strictQuery", true);
const db = await mongoose.connect("mongodb://127.0.0.1:27017/marn", {});
console.info("📚 Connected to db", db?.connections[0]?.host);
