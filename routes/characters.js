const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

router.use(cors());

dotenv.config();

router.get('/characters', async (req, res) => {
  try {
    const { name = '', limit = 100, skip = 0 } = req.query;

    const url = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.APIKEY}&name=${name}&skip=${skip}&limit=${limit}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
