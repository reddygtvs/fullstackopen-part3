require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Person = require("./models/person");

const app = express();
app.use(cors());
app.use(express.static("build"));

app.use(express.json());

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
  Person.find({}).then((person) => {
    //response.json(person.map((perso) => perso.toJSON()));
    response.json(person);
  });
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    //response.status(404).end();
    return response.status(404).json({
      error: "Invalid ID",
    });
  }
});
const generateId = () => {
  return Math.floor(Math.random() * 100000);
};
app.post("/api/persons", (request, response) => {
  const info = request.body;
  if (!info.name || !info.number) {
    return response.status(400).json({
      error: "Name or Number empty",
    });
  }
  const found = persons.find((person) => person.name === info.name);
  if (found) {
    return response.status(403).json({
      error: "Name already exists in phonebook",
    });
  }
  let person = {
    id: generateId(),
    name: info.name,
    number: info.number,
  };
  persons = persons.concat(person);
  console.log(persons);
  response.json(persons);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//const PORT = 3001;
//app.listen(PORT);
//console.log(`Server running on port ${PORT}`);
