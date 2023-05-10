import { gql, useQuery } from "@apollo/client";
type Book = {
  title: string;
  author: string;
  century: number;
};

const BOOKS_QUERY = gql`
  query Query {
    books {
      title
      author
      century
    }
  }
`;

const Books = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("BOOKS_QUERY error", error);
    return <>{error.message}</>;
  } else {
    return (
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
                <div>{b.century}</div>
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default Books;
