const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  dueDate: Date,
  completed: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Task", TaskSchema);
