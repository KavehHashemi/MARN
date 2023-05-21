import "./index.css";
import { Dialog } from "@mui/material";
import { BookType } from "./Types";
import EditDialog from "./EditDialog";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { BOOKS_QUERY, DELETE_BOOK_MUTATION } from "./graphql";

const SingleBook = ({ author, id, title, year }: BookType) => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [deleteMutation] = useMutation(DELETE_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });

  const DeleteBook = (id: string) => {
    deleteMutation({
      variables: {
        id: id,
      },
    });
  };

  return (
    <div>
      <div className="card">
        <div>{title}</div>
        <div>{author}</div>
        <div>{year}</div>
        <button onClick={() => DeleteBook(id)}>Remove</button>
        <button onClick={() => setShowDialog(true)}>Edit</button>
      </div>
      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        classes={{ paper: "backgroundColor:#242424" }}
      >
        <EditDialog
          id={id}
          author={author}
          title={title}
          year={year}
          setShowDialog={setShowDialog}
        ></EditDialog>
      </Dialog>
    </div>
  );
};

export default SingleBook;
