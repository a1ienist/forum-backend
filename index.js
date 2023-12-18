import express from "express";
import cors from "cors";
import mongoose from "mongoose";
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("err:", err);
  });
