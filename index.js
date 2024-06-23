require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
// const uid2 = require('uid2');
// const SHA256 = require('crypto-js/sha256');
// const encBase64 = require('crypto-js/enc-base64');

// const User = require('./models/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Разрешить доступ с любого источника
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('An error occurred while connecting to MongoDB:', err);
//   });

const comicsRoutes = require('./routes/comics');
const charactersRoutes = require('./routes/characters');

app.use(charactersRoutes, comicsRoutes);

app.get('/', (req, res) => {
  res.send('bienvenue sur mon serveur');
});

// signup

// app.post('/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     return res.status(400).json({ message: 'Missing parameters' });
//   }

//   const salt = uid2(16);
//   const hash = SHA256(password + salt).toString(encBase64);
//   const token = uid2(16);

//   const newUser = new User({
//     username,
//     email,
//     password: hash,
//     salt,
//     token,
//   });

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error('An error occurred during signup:', error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// });

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
