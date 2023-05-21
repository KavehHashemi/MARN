import "./index.css";
import { useMutation } from "@apollo/client";
import { BOOKS_QUERY, EDIT_BOOK_MUTATION } from "./graphql";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { BookType } from "./Types";
import { useState } from "react";

type editProps = {
  id: string;
  title: string;
  author: string;
  year: string;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};
const EditDialog = ({ id, title, author, year, setShowDialog }: editProps) => {
  const [book, setBook] = useState<BookType>({
    author: author,
    id: id,
    title: title,
    year: year,
  });

  const [editMutation] = useMutation(EDIT_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });

  const saveChanges = () => {
    editMutation({
      variables: {
        id: book.id,
        title: book.title,
        author: book.author,
        year: +book.year,
      },
    });
    setShowDialog(false);
  };

  const discardChanges = () => {
    setShowDialog(false);
  };
  return (
    <div>
      <DialogTitle>Edit Book</DialogTitle>
      <DialogContent>
        <form className="form">
          <label htmlFor="title">title</label>
          <input
            type="string"
            name="title"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          ></input>
          <label htmlFor="author">author</label>
          <input
            type="string"
            name="author"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          ></input>
          <label htmlFor="year">year</label>
          <input
            type="string"
            name="year"
            value={book.year}
            onChange={(e) => setBook({ ...book, year: e.target.value })}
          ></input>
        </form>
      </DialogContent>
      <DialogActions>
        <button onClick={saveChanges}>Save</button>
        <button onClick={discardChanges}>Cancel</button>
      </DialogActions>
    </div>
  );
};

export default EditDialog;
