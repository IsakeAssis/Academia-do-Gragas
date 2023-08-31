const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  name: String,
  date: String,
  payment: Boolean,
});

module.exports = Person;
