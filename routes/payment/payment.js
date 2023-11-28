const { paymentSecret } = require("../../api/payment");

const router = require("express").Router();

router.post("/create-payment-intent", paymentSecret);

module.exports = router;
