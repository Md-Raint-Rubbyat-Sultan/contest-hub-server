const {
  paymentSecret,
  paymentInfo,
  singlePaymentInfo,
  userPaymentInfo,
  updateParticipation,
  userStatus,
  singlePaymentInfoById,
} = require("../../api/payment");
const verifyToken = require("../../middlewares/varifyToken");

const router = require("express").Router();

router.post("/create-payment-intent", paymentSecret);

router.post("/payment-info", verifyToken, paymentInfo);

router.get("/single-payment-info/", verifyToken, singlePaymentInfo);

router.get(
  "/single-payment-info-by-id/:id",
  verifyToken,
  singlePaymentInfoById
);

router.get("/user-payment-info/", verifyToken, userPaymentInfo);

router.get("/user-full-status/", verifyToken, userStatus);

router.patch("/user-payment-info/:id", verifyToken, updateParticipation);

module.exports = router;
