import express, { Router } from 'express'
import User from '../models/User.js';

const router = express.Router();
router.get('/', async (req, res) => {
  const { search } = req.query;
  try {
    let keywordCondition = search ?
      {
        $or: [
          { email: { $regex: search, $options: 'i' } },
          { username: { $regex: search, $options: 'i' } }, // 'i' : insensitive

        ]
      }
      : {}
    const users = await User.find(keywordCondition).sort({ email: "asc" })
    res.status(200).json(users)
  }
  catch (error) {
    console.log(error)
    res.status(500).send('m ngu')
  }
})

router.post('/', async (req, res) => {
  const uploadedUsers = req.body;
  const users = [];

  try {
    for (let i = 0; i < uploadedUsers.length; i++) {
      const { id, username, email, birthday } = uploadedUsers[i];

      if (!id) {
        const newUser = await User.create({
          username,
          email,
          birthday,
        });
        users.push(newUser);
      } else {
        const updateUser = await User.findByIdAndUpdate(
          id,
          {
            username,
            email,
            birthday,
          },
          { new: true }
        );
        users.push(updateUser);
      }
    }

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error');
  }
});

export default router

// import fs from 'fs'
// const fs = require('fs');
// const path = require('path');
// const MOCK_USERS = path.join(__dirname, '../MOCK_USERS.json')


// const getUser = () => {
//     const data = fs.readFileSync(MOCK_USERS);
//     return JSON.parse(data);
// }
