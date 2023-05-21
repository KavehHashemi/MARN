import "./index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom/client";

import Books from "./Books.tsx";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBook from "./CreateBook.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#242424",
          color: "whitesmoke",
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="main-container">
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/create-book">Add Book</Link>
          </nav>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/books" element={<Books />} />
            <Route path="/create-book" element={<CreateBook />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);
