const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const registerUserRoute = require("./routes/registerUser");

const mongoString = process.env.MONGODB_STRING;

mongoose
  .connect(mongoString)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("Error: ", error));

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running at ${port} successfully`));

app.use("/", registerUserRoute);
