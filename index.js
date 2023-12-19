import express from "express";
import cors from "cors";
import mongoose from "mongoose";
//router
// import expenseRouter from "./src/routes/expenses.js";
// import userRouter from "./src/routes/users.js";

import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
// app.use(expenseRouter);
// app.use(userRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to mongo!"))
  .catch((err) => {
    console.log("err:", err);
  });

  app.listen(process.env.PORT, () => {
    console.log(`App connected on port ${process.env.PORT}`);
  });