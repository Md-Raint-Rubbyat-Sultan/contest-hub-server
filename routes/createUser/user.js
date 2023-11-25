const router = require("express").Router();
const { createUser } = require("../../api/createUser");

router.post("/users", createUser);

module.exports = router;
