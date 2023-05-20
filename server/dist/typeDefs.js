export const typeDefs = `#graphql
  type Book {
    title: String
    author: String 
    year: Int
  }

  type Query {
    books: [Book]
    introduction(intro:String):String  
  }
`;
