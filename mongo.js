const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

if (process.argv.length == 4) {
  console.log(
    "Please provide both the name and the number as an argument: node mongo.js <password> <name> <number>"
  );
}

const password = process.argv[2];

const url = `mongodb+srv://sskhynix-phonebook:${password}@cluster0.ke4i12v.mongodb.net/?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length == 5) {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");

      const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
      });

      return person.save();
    })
    .then(() => {
      console.log(
        `Added ${process.argv[3]} number ${process.argv[4]} to phonebook`
      );
      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}

if (process.argv.length == 3) {
  mongoose.connect(url).then((result) => {
    console.log("connected");
    console.log("phonebook");
    Person.find({}).then((result) => {
      result.forEach((person) => {
        console.log(person.name + " " + person.number);
      });
      return mongoose.connection.close();
    });
  });
}
