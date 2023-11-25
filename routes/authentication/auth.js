const router = require("express").Router();
const { createToken, logout } = require("../../api/authentication/controllers");

router.post("/jwt", createToken);
router.post("/logout", logout);

module.exports = router;
