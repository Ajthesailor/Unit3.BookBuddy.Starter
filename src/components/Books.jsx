import {Link } from "react-router-dom";
import { useGetBooksQuery } from "./bookSlice";
/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
function BookCard({ book }){
  return (
    <li>
      <h3>{book.name}</h3>
      <img src={book.image} />
      <Link to={`/books/${book.id}`}>See Details</Link>
    </li>
  );
}


export default function Books() {
  
  const books = useGetBooksQuery().data;
  console.log("books:", books);
  return (
  <>
    <div><Link to="/books/1">Books</Link>
    </div>
  <ul className="book-list">
    {books?.books?.map((book) => (
      <BookCard key={book.id} book={book} />
    ) 
    )}
  </ul>
  </>
  ); 
}