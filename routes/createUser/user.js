const { createUser } = require("../../api/createUser");

const router = require("express").Router();

router.post("/users", createUser);

module.exports = router;
