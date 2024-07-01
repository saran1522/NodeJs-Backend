import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateBook from "./UpdateBook";
import DeleteBook from "./DeleteBook";
import Home from "./Home";
import ShowBook from "./ShowBook";
import CreateBook from "./CreateBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<UpdateBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
