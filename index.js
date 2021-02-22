require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const handle = require('./handler')

// Routes
const quizRouter = require('./routes/quiz');
const userRouter = require('./routes/user');

const app = express();
 

app.use(express.json());
app.use(cors());

//Connect to the mongoDB
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{
    console.log('Database connected...');
})


//Check the API
/* app.get('/', (req, res) => {
  res.send({ status: 'API Working !!!' });
}); */

//Routes in here
app.use('/api/users', userRouter);
app.use('/api/quiz', quizRouter);


app.use(handle.error)

//server PORT Listening
app.listen(5000, () => {
  console.log(`The Server is running on 5000`);
});