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

  type Mutation {
        create(title: String, author:String, year: Int): Book
        delete(id:ID):ID
        edit(id:ID,title: String, author:String, year: Int):Book
    }
`;
