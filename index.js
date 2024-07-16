import express from 'express';
import dotenv from 'dotenv'
import usersRouter from './routes/User.js'
import mongoose from 'mongoose';
dotenv.config();

const app = express();

try {
  await mongoose.connect('mongodb://localhost:27017/express-practice-1');
  console.log('MongoDB connected successfully.')
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.use('/api/healthcheck', (req, res) => {
    res.status(200).send('Fine');
})

app.use('/api/users', usersRouter)


app.listen(process.env.PORT, () => {
  console.log(`ExpressJS is running at http://localhost:${process.env.PORT}`);
})