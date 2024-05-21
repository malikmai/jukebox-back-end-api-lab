const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`connected to MongoDB: ${mongoose.connection.name}`);
});

app.use(cors());
app.use(express.json());

const trackRouter = require("./controllers/Tracks.js");
app.use("/tracks", trackRouter);

app.listen(3000, () => {
  console.log("server started");
});