import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use('/api/healthcheck', (req, res) => {
    res.status(200).send('Fine');
})

app.listen(process.env.PORT, () => {
  console.log(`ExpressJS is running at http://localhost:${process.env.PORT}`);
})