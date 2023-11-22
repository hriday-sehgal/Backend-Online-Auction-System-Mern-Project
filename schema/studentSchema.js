const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    collection: "Students",
  }
);
module.exports = mongoose.model("Students", studentSchema);
