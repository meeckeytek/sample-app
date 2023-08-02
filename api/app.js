const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const path = require("path");
const postRouter = require("./routes/postRoute");
// const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.static(path.join("public")));

app.use(express.json({ limit: "50mb" }));
// app.use(express.json());

app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.use(cors());

app.use("/uploads", express.static(path.join("uploads")));

// //Making sure all requested are accessed and header are set
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// //Using user route
app.use("/api/v1/post", postRouter);

//Checking each route
app.use((res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

//Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
