const popularContest = require("./popularContests");
const allContests = require("./allContests");
const bestCreator = require("./bestCreator");
const contestCategories = require("./contestCategory");
const singleContest = require("./singleContest");
const hostConfirmed = require("./hostConfirmed");
const addAContest = require("./addAContest");
const pendingContests = require("./pendingContests");
const deletePending = require("./deletePending");
const deleteContest = require("./deleteContest");
const fullContests = require("./fullContests");
const allPendingContests = require("./allPendingContests");
const singlePendingContest = require("./singlePendingContest");
const updatePending = require("./updatePending");
const approveContest = require("./approveContest");

module.exports = {
  popularContest,
  allContests,
  bestCreator,
  contestCategories,
  singleContest,
  hostConfirmed,
  addAContest,
  pendingContests,
  deletePending,
  deleteContest,
  fullContests,
  allPendingContests,
  singlePendingContest,
  updatePending,
  approveContest,
};
