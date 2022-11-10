const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;
console.log("connecting to", url);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to mongoDB:", error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 9,
    validate: {
      validator: function (v) {
        return /\d{2,3}-\d{5,}/.test(v);
      },
      message: (props) => "enter valid format: xx-xxx...., at least 8 numbers",
    },
  },
});
personSchema.options.toJSON = {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
};
// personSchema.set("toJson", {
//   virtuals: true,
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });

module.exports = mongoose.model("Person", personSchema);
