const express = require("express");
const { requireSignin, adminMiddleware } = require("../../middleware");
const { initialData } = require("../../controller/admin/initialData");
const router = express.Router();

router.post("/initialdata", requireSignin, adminMiddleware, initialData);

module.exports = router;
