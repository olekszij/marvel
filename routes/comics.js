const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

router.get('/comics', async (req, res) => {
  try {
    const { title = '', limit = 100, skip = 0 } = req.query;
    const url = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.APIKEY}&title=${title}&skip=${skip}&limit=${limit}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/comics/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const url = `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.APIKEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
