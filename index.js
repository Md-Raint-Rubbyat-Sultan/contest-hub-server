const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// routes and middlewares
const globalErrorHandler = require("./utils/golobalErrorHandler");
const connectDB = require("./db/connectDB");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const auth = require("./routes/authentication/auth");
const user = require("./routes/createUser/user");
const contests = require("./routes/contests/contests");

// middlewares
applyMiddlewares(app);

// routes

// auth route
app.use("/api/v1", auth);

// user Route
app.use("/api/v1", user);

// contest route
app.use("/api/v1", contests);

app.get("/health", (req, res) => {
  res.send("contest is coming!");
});

// error handling middleware
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

app.use(globalErrorHandler);

const run = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

run();
