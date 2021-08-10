const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();

router.post("/order/:user_id", async (req, res) => {});

router.get("/order/:user_id", async (req, res) => {});

module.exports = router;
