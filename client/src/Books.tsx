import { useMutation, useQuery } from "@apollo/client";
import { Book } from "./Types";
import { BOOKS_QUERY, DELETE_BOOK_MUTATION } from "./graphql";

// const INTRO_QUERY = gql`
//   query Query($intro: String) {
//     introduction(intro: $intro)
//   }
// `;

const Books = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);
  const [deleteMutation] = useMutation(DELETE_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });

  const DeleteBook = (id: number) => {
    deleteMutation({
      variables: {
        id: id,
      },
    });
  };
  // const { data, loading, error } = useQuery(INTRO_QUERY, {
  //   variables: { intro: "he is a 21 century sci-fi author" },
  // });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("INTRO_QUERY error", error);
    return <>{error.message}</>;
  } else {
    return (
      // <div>{data.introduction}</div>
      <div>
        {data.books.map((b: Book) => {
          {
            return (
              <div
                key={b.id}
                style={{
                  borderBottom: "1px dashed grey",
                  marginBottom: "1rem",
                }}
                onClick={() => console.log(b)}
              >
                <div>title: {b.title}</div>
                <div>author: {b.author}</div>
                <div>year: {b.year}</div>
                <button onClick={() => DeleteBook(b.id as unknown as number)}>
                  Remove
                </button>
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default Books;
