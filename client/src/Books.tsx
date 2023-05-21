import "./index.css";
import { useQuery } from "@apollo/client";
import { BOOKS_QUERY } from "./graphql";
import SingleBook from "./SingleBook";
import { BookType } from "./Types";
import CreateBook from "./CreateBook";

// const INTRO_QUERY = gql`
//   query Query($intro: String) {
//     introduction(intro: $intro)
//   }
// `;

const Books = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);

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
      <div className="container">
        {data.books.map((b: BookType) => {
          return (
            <>
              <SingleBook
                key={b.id}
                author={b.author}
                id={b.id}
                title={b.title}
                year={b.year}
              ></SingleBook>
            </>
          );
        })}
        <CreateBook></CreateBook>
      </div>
    );
  }
};

export default Books;
