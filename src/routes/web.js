const express = require("express");
const router = express.Router();
const {getSample, getTest} = require('../controllers/homeControllers')

router.get("/", getSample);

router.get("/test", getTest);

module.exports = router;
