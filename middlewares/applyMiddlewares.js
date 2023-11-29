const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const applyMiddlewares = (app) => {
  app.use(
    cors({
      origin: ["https://contest-hub-aaa97.web.app"],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = applyMiddlewares;
