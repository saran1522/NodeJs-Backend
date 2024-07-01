import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(null);
  const navigate = useNavigate();
  async function handleBookAdd() {
    const book = {
      title,
      author,
      publishYear,
    };
    const res = await axios.post("http://localhost:5000/books", book);
    console.log(res);
    navigate("/");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="book author name"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="publish year"
        value={publishYear}
        onChange={(e) => {
          setPublishYear(e.target.value);
        }}
      />
      <button onClick={handleBookAdd}>Create</button>
    </div>
  );
}

export default CreateBook;
