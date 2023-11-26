const router = require("express").Router();
const {
  popularContest,
  allContests,
  bestCreator,
  contestCategories,
  singleContest,
} = require("../../api/contests");
const verifyToken = require("../../middlewares/varifyToken");

router.get("/popular-contests", popularContest);

router.get("/contests-by-category/", allContests);

router.get("/single-contest/:id", verifyToken, singleContest);

router.get("/categories", contestCategories);

router.get("/best-creator", bestCreator);

module.exports = router;
