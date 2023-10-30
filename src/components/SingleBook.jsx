/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "./bookSlice";


export default function SingleBook() {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Book not found</p>;
  }

  const { book } = data;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <img src={book.coverimage} alt={book.title} />
      {book.available === null ? (
        <p>Availability: Not available</p>
      ) : (
        <p>Availability: {book.available}</p>
      )}
    </div>
  );
}
