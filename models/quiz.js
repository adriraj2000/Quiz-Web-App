const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  TitleQuiz: {
    type: String,
    required: true,
  },
  QuestionsCount: {
    type: Number,
    required: true,
  },
  questions: [
    {
      TitleQuestion: {
        type: String,
      },
      options: [
        {
          TitleOption: {
            type: String,
          },
          OptionTruth: {
            type: Boolean,
          }
        }
      ]
    }
  ]
});

module.exports = mongoose.model('Quiz', QuizSchema);