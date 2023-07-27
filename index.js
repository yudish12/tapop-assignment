import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./Routes/authRoutes.js";
import postRoutes from "./Routes/postRoutes.js";
import cors from "cors";

const app = express();

app.enable("trust proxy");

app.use(cors());

app.options("*", cors());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.URI)
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection completed");
  })
  .catch((e) => console.log(e));

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.listen(5000, () => {
  console.log("server started");
});
