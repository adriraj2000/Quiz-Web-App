const Quiz = require("../models/quiz");
const Result = require("../models/result");
const axios = require('axios')

//Open Trivia Database - https://opentdb.com/api.php

function getCategoryID(category) {
    category = category.toLowerCase();
    switch (category) {
        case 'any': return '';
        case 'general': return 9;
        case 'books': return 10;
        case 'film': return 11;
        case 'music': return 12;
        case 'theatre': return 13;
        case 'television': return 14;
        case 'videogames': return 15;
        case 'boardgames': return 16;
        case 'science': return 17;
        case 'computers': return 18;
        case 'mathematics':
        case 'math': return 19;
        case 'mythology': return 20;
        case 'sports': return 21;
        case 'geography': return 22;
        case 'history': return 23;
        case 'politics': return 24;
        case 'art': return 25;
        case 'celebrities': return 26;
        case 'animals': return 27;
        case 'vehicles': return 28;
        case 'comics': return 29;
        case 'gadgets': return 30;
        case 'anime': return 31;
        case 'cartoons': return 32;
    }
}


const quizHandler = {

    getquestions: async (req, res) => {

        try {
            const testid = req.body.code
            const email = req.body.email
            const doc = await Quiz.find({ code: testid })
            if (!doc) {
                return res.status(400).json({ msg: "This test does not exist." })
            }
            if (Date.parse(doc[0].expiry) < Date.now()) {
                return res.status(400).send({ message: "Test has expired!! " });
            }
            const check = await Result.findOne({ code: testid, email })
            if (check) {
                return res.status(400).send({ message: "Test already taken!" });
            }
            const categoryID = getCategoryID(doc[0].topic)
            const url = `https://opentdb.com/api.php?amount=${doc[0].amount}&category=${categoryID}&difficulty=easy&type=multiple`
            const questions = await axios.get(url);
            console.log(questions.data);
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    submitquiz: async (req, res) => {
        //const {testid,name,email,score} = req.body;

        //console.log(req.body)
        try {
            const resultEntry = await Result.create(req.body)
            res.status(200).json({
                message: "Result added"
            })
        } catch (error) {
            res.status(400).json({
                "error": error
            })
        }
    },

    getresult: async (req, res) => {
        const testid = req.body.code;
        try {
            const resultdoc = await Result.find({ code:testid }).exec();
            return res.send(resultdoc);
        } catch (err) {
            return res.status(400).json({
                "error":err
            });
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