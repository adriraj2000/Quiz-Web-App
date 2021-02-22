const Quiz = require("../models/quiz");
const Result = require("../models/result");
const axios = require('axios')

//Open Trivia Database - https://opentdb.com/api.php

const quizHandler = {
    getquiz: async (req, res) => {
        const email = req.body.email;
        try {
            const doc = await Quiz.find({ email }).sort("-created").exec();
            return res.send(doc);
        } catch (err) {
            console.log(err);
            return res.status(400).send();
        }
    },
    addquiz: async (req, res) => {

        const code = (await Quiz.countDocuments({}).exec()) + 1000;
        const email = req.body.email;
        const amount = req.body.amount;
        const topic = req.body.topic;
        const time = req.body.time;
        const expiry = Date.parse(req.body.expiry);
        const created = Date.parse(req.body.created);

        const newQuiz = new Quiz({
            code,
            email,
            amount,
            topic,
            time,
            expiry,
            created,
        })
        newQuiz
            .save()
            .then(() => res.send("Quiz added!"))
            .catch((err) => res.status(400).json("error : " + err));
    }
}


module.exports = quizHandler