import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/employees", (req, res) => {
  const employees = [
    {
      id: "1",
      firstName: "Tom",
      lastName: "Cruise",
      photo: "https://jsonformatter.org/img/tom-cruise.jpg",
    },
    {
      id: "2",
      firstName: "Maria",
      lastName: "Sharapova",
      photo: "https://jsonformatter.org/img/Maria-Sharapova.jpg",
    },
    {
      id: "3",
      firstName: "Robert",
      lastName: "Downey Jr.",
      photo: "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
    },
  ];
  res.send(employees);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  //   res.send("Server is running on port 127.0.0.1");
});
