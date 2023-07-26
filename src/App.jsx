import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Books from "./Components/Books";
import SearchBar from "./Components/SearchBar";

function App() {
  const [books, setBooks] = useState([]);
  const [terms, setTerms] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const resp = await axios(
        `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${
          import.meta.env.VITE_BOOKS_API_KEY
        }`
      );
      console.log(resp.data.results.lists);

      setBooks(resp.data.results.lists);
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.display_name.toLowerCase().includes(terms.toLowerCase()) ||
      book.title.toLowerCase().includes(terms.toLowerCase()) ||
      book.author.toLowerCase().includes(terms.toLowerCase()) ||
      book.description.toLowerCase().includes(terms.toLowerCase())
  );

  return (
    <div className="container m-2 p-2 min-w-full ">
      <div className="flex justify-center items-center pt-10">
        <h1 className="text-5xl font-semibold text-blue-600 self-center ">
          Book store
        </h1>
      </div>
      <SearchBar onChange={(e) => setTerms(e.target.value)} />
      <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4">
        {filteredBooks.map((book, idx) => (
          <Books
            key={idx}
            listId={book.list_id}
            display_name={book.display_name}
            title={book.title}
            author={book.author}
            desc={book.description}
            publisher={book.publisher}
            img={book.book_image}
            link={book.amazon_product_url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
