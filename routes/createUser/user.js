const router = require("express").Router();
const {
  createUser,
  isAdmin,
  isHost,
  getAllUsers,
} = require("../../api/createUser");
const verifyToken = require("../../middlewares/varifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");

router.post("/users", createUser);

router.get("/users", verifyToken, verifyAdmin, getAllUsers);

router.get("/users/admin/:email", isAdmin);

router.get("/users/host/:email", isHost);

module.exports = router;
