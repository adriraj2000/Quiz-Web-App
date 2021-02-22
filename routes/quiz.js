const router = require('express').Router()
const test = require("../models/quiz");
const result = require("../models/result");
const axios = require('axios')
const authMiddleware = require('../middleware/user')

//Open Trivia Database - https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple


router.use("/getquiz", authMiddleware);
router.use("/getresults", authMiddleware);
router.use("/addquiz", authMiddleware);


router.post()