const router = require("express").Router();
const {
  popularContest,
  allContests,
  bestCreator,
  contestCategories,
  singleContest,
  hostConfirmed,
  addAContest,
  pendingContests,
  deletePending,
  fullContests,
  allPendingContests,
} = require("../../api/contests");
const verifyToken = require("../../middlewares/varifyToken");
const verifyAdmin = require("../../middlewares/verifyHost");
const verifyHost = require("../../middlewares/verifyHost");

router.get("/popular-contests", popularContest);

router.get("/contests-by-category/", allContests);

router.get("/contests", fullContests);

router.get("/pending", verifyToken, verifyAdmin, allPendingContests);

router.get("/single-contest/:id", verifyToken, singleContest);

router.get("/contest/host/confirmed/", verifyToken, verifyHost, hostConfirmed);

router.post("/contest/host/add-contest", verifyToken, verifyHost, addAContest);

router.get("/contest/host/pending/", verifyToken, verifyHost, pendingContests);

router.delete(
  "/contest/host/delete-pending/:id",
  verifyToken,
  verifyHost,
  deletePending
);

router.get("/categories", contestCategories);

router.get("/best-creator", bestCreator);

module.exports = router;
