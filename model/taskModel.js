import mongoose from "mongoose";

const TaskItemSchema = new mongoose.Schema({
  task: { type: String, required: true },
});

const taskModel = mongoose.model("taskList", TaskItemSchema);

export default taskModel;
