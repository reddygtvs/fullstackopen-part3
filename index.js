const express = require("express");
const app = express();

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Welcome to the PhoneBook API<h1>");
});

app.get("/api/info", (request, response) => {
  const fetchTime = new Date();
  const size = Object.keys(persons).length;
  console.log(fetchTime);
  console.log(size);
  response.send(`<h2>Phonebook has info for ${size} people</h2>
  <h2>${fetchTime}`);
  //response.json(`<h3></h3>`)
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
