const router = require("express").Router();
const {
  popularContest,
  allContests,
  bestCreator,
  contestCategories,
  singleContest,
  hostConfirmed,
} = require("../../api/contests");
const verifyToken = require("../../middlewares/varifyToken");
const verifyHost = require("../../middlewares/verifyHost");

router.get("/popular-contests", popularContest);

router.get("/contests-by-category/", allContests);

router.get("/single-contest/:id", verifyToken, singleContest);

router.get("/contest/host/confirmed/", verifyToken, verifyHost, hostConfirmed);

router.get("/categories", contestCategories);

router.get("/best-creator", bestCreator);

module.exports = router;
