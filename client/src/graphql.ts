import { gql } from "@apollo/client";

export const BOOKS_QUERY = gql`
  query Query {
    books {
      id
      title
      author
      year
    }
  }
`;

export const CREATE_BOOK_MUTATION = gql`
  mutation Mutation($title: String, $author: String, $year: Int) {
    create(title: $title, author: $author, year: $year) {
      id
      title
      author
      year
    }
  }
`;

export const DELETE_BOOK_MUTATION = gql`
  mutation Mutation($id: ID) {
    delete(id: $id)
  }
`;
