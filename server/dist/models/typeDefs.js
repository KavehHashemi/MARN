export const typeDefs = `#graphql
  type Book {
    id:ID,
    title: String,
    author: String, 
    year: Int
  }

  type Query {
    books: [Book]
    introduction(intro:String):String  
  }
`;
