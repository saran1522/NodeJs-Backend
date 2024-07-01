import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getBook() {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:5000/books/${id}`);
      const data = await res.data;
      setTitle(data.book.title);
      setAuthor(data.book.author);
      setPublishYear(data.book.publishYear);
      setIsLoading(false);
    }
    getBook();
  }, [id]);

  async function updateBook() {
    const book = {
      title,
      author,
      publishYear,
    };
    const res = await axios.put(`http://localhost:5000/books/${id}`, book);
    console.log(res);
    navigate("/");
  }
  return (
    <div>
      <h1>Update Book</h1>
      <input
        type="text"
        value={title}
        placeholder="book title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        value={author}
        placeholder="book author name"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        type="number"
        value={publishYear}
        placeholder="publish year"
        onChange={(e) => {
          setPublishYear(e.target.value);
        }}
      />
      <button onClick={updateBook}>Update</button>
      <p>{id}</p>
    </div>
  );
}

export default UpdateBook;
