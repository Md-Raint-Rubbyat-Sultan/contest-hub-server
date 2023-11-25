const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const applyMiddlewares = (app) => {
  app.use(
    cors({
      origin: [process.env.LOCAL_LINK],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = applyMiddlewares;
