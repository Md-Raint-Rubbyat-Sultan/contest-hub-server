const router = require("express").Router();
const { popularContest, allContests } = require("../../api/contests");

router.get("/popular-contests", popularContest);

router.get("/all-contests", allContests);

module.exports = router;
