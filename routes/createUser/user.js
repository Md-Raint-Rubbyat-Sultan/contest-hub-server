const router = require("express").Router();
const {
  createUser,
  isAdmin,
  isHost,
  getAllUsers,
  updateUserRole,
} = require("../../api/createUser");
const verifyToken = require("../../middlewares/varifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");

router.post("/users", createUser);

router.get("/users", verifyToken, verifyAdmin, getAllUsers);

router.patch("/users/:id", verifyToken, verifyAdmin, updateUserRole);

router.get("/users/admin/:email", isAdmin);

router.get("/users/host/:email", isHost);

module.exports = router;
