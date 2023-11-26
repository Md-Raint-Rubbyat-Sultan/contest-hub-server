const router = require("express").Router();
const { createUser, isAdmin, isHost } = require("../../api/createUser");

router.post("/users", createUser);

router.get("/users");

router.get("/users/admin/:email", isAdmin);

router.get("/users/host/:email", isHost);

module.exports = router;
