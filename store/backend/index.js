import express, { request, response } from "express";
import { PORT, MONGODB_URI } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./book.model.js";
import bookRoute from "./routes/bookRout.js";
import cors from "cors";

const app = express();

// middleware to parse json data
app.use(express.json());

// default route. all the routes will be prefixed with /books like /books/:id
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/books", bookRoute);

app.get("/", (req, res) => {
  return res.status(234).send("welcome to the book store backend");
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });
