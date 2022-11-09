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
  Person.count({}).then((size) =>
    response.send(`<h2>Phonebook has info for ${size} people</h2>
  <h2>${fetchTime}`)
  );

  //response.json(`<h3></h3>`)
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then((person) => {
    response.json(person);
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response) => {
  const info = request.body;
  if (!info.name || !info.number) {
    return response.status(400).json({
      error: "Name or Number empty",
    });
  }
  const person = new Person({
    name: info.name,
    number: info.number,
  });
  person.save().then((newPerson) => {
    Person.find({}).then((person) => {
      response.json(person);
    });
  });

  //.catch((error) => console.log(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const info = request.body;

  const person = {
    name: info.name,
    number: info.number,
  };
  console.log(info.name);
  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatePerson) => {
      response.json(updatePerson);
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//const PORT = 3001;
//app.listen(PORT);
//console.log(`Server running on port ${PORT}`);
