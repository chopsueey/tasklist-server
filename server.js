import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import taskRouter from "./routes/taskRouter.js";

import connectDB from "./database/connectDB.js";

dotenv.config();
//
const app = express();

const port = process.env.PORT || 5050;


app.use(cors());
app.use(express.json());

app.use("/tasks", taskRouter);

// app.get("/", (req, res) => {
//   res.send("Hallo von GET");
// });

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Verbindung mit MongoDB hat geklappt");
    app.listen(port, () => {
      console.log("Server läuft auf: ", port);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
