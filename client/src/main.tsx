import "./index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom/client";

import Books from "./Books.tsx";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBook from "./CreateBook.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/create-book">Add Book</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/books" element={<Books />} />
        <Route path="/create-book" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);
