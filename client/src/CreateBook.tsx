import { useState } from "react";
import { Book } from "./Types";
import { useMutation } from "@apollo/client";
import { CREATE_BOOK_MUTATION, BOOKS_QUERY } from "./graphql";

const CreateBook = () => {
  const [createMutation] = useMutation(CREATE_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });
  const [book, setBook] = useState<Book>({
    id: "",
    author: "",
    title: "",
    year: "",
  });

  const AddBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMutation({
      variables: {
        title: book.title,
        author: book.author,
        year: +book.year,
      },
    });
    console.log(book);
    setBook({ author: "", title: "", year: "", id: "" });
  };

  return (
    <div>
      <form onSubmit={(e) => AddBook(e)}>
        <label htmlFor="title">Title</label>
        <input
          type="string"
          title="book name"
          name="title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        ></input>
        <label htmlFor="author">Author</label>
        <input
          type="string"
          title="book author"
          name="author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        ></input>
        <label htmlFor="year">Year</label>
        <input
          type="string"
          title="book year"
          name="year"
          value={book.year}
          onChange={(e) => setBook({ ...book, year: e.target.value })}
        ></input>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default CreateBook;
