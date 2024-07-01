import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import { CiEdit, CiSquareMore } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchBooks() {
      setIsLoading(true);
      const res = await axios.get("http://localhost:5000/books");
      const data = res.data;
      setBooks(data.books);
      console.log(res);
      setIsLoading(false);
    }
    fetchBooks();
  }, []);

  async function handleDelete(id) {
    const res = await axios.delete(`http://localhost:5000/books/${id}`);
    setBooks(books.filter((book) => book._id !== id));
    console.log(res);
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Link to="/books/create">Create New Book</Link>
      {books.map((book) => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.publishYear}</p>
          <p>Created on: {new Date(book.createdAt).toLocaleDateString()}</p>
          <p>
            Last Updated on: {new Date(book.updatedAt).toLocaleDateString()}
          </p>
          <div>
            <Link to={`/books/edit/${book._id}`}>
              <CiEdit className=" cursor-pointer" />
            </Link>
            <Link to={`/books/details/${book._id}`}>
              <CiSquareMore />
            </Link>
            <Link
              onClick={() => {
                handleDelete(book._id);
              }}
            >
              <AiOutlineDelete />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;

{
  /* // <div className="h-auto w-auto bg-red-400 text-white">
    //   <p className="bg-blue-400 text-white text-3xl font-bold underline">
    //     this is not a backend testsdsd
    //   </p>
    // </div> */
}
