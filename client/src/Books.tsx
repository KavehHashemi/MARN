import { gql, useQuery } from "@apollo/client";
type Book = {
  title: string;
  author: string;
  year: number;
};

const BOOKS_QUERY = gql`
  query Query {
    books {
      title
      author
      year
    }
  }
`;

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
      <div>
        {data.books.map((b: Book, i: number) => {
          {
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px dashed grey",
                  marginBottom: "1rem",
                }}
              >
                <div>{b.title}</div>
                <div>{b.author}</div>
                <div>{b.year}</div>
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default Books;
