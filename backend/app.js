const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user-routes");
const httpError = require("./models/http-error");

const app = express();

// Set up CORS headers middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  // For pre-flight req
  if (req.method === "OPTIONS") {
    res.status(200).send(); // Move to the next middleware for non-OPTIONS requests
  } else {
    next();
  }
});

app.use(bodyParser.json());

app.use("/api", userRoutes);

//middleware for catching all unknown routes
app.use("/", (req, res, next) => {
  return next(httpError("Could not find this route", 404));
});

// middleware for listening all error
app.use((error, req, res, next) => {
  // if headers are already sent do nothing
  if (error.headersSent) {
    return next(error);
  }

  // else will set the headers default
  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "An unknown error occured" });
});

app.listen(5000, () => {
  mongoose
    .connect("mongodb+srv://akgecsaurabh:iamsk@cluster0.b4kqsd5.mongodb.net/")
    .then(() => {
      console.log("Database Connected");
    });
  console.log("listening on port 5000");
});
