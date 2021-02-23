const Quiz = require("../models/quiz");
const Result = require("../models/result");
const axios = require('axios')

//Open Trivia Database - https://opentdb.com/api.php

const quizHandler = {

    getquestions: async (req, res) => {

        try {
            const testid = req.body.code
            const email = req.body.email
            const doc = await Quiz.find({ code: testid })
            //console.log(doc)
            if (!doc) {
                return res.status(400).json({ msg: "This test does not exist." })
            }
            if (Date.parse(doc.expiry) < Date.now()) {
                return res.status(400).send({ message: "Test has expired!! " });
            }
            const check = await Result.findOne({ code: testid, email })
            if (check) {
                return res.status(400).send({ message: "Test already taken!" });
            }
            const questions = await axios.get("https://opentdb.com/api.php",{ 
                params: {
                    amount: Number(doc.amount),
                    category: doc.topic,
                },
            });
            
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

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