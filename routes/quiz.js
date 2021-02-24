const router = require('express').Router()
const authMiddleware = require('../middleware/user')
const quizHandler = require('../handler/quiz')

router.route("/").post(quizHandler.getquestions)

router.route("/submitquiz").post(authMiddleware,quizHandler.submitquiz)
router.route("/getresult").post(authMiddleware,quizHandler.getresult)

router.route("/getquiz").get(authMiddleware, quizHandler.getquiz);
router.route('/addquiz').post(authMiddleware, quizHandler.addquiz)


module.exports = router
