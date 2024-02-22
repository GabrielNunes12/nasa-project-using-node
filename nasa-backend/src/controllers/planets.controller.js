const express = require('express');
const planets = require('../models/planets.model');
const planetRouter = express.Router();
planetRouter.get('/planets', (req, res) => {
  res.status(200).json(planets);
})

module.exports = {
  planetRouter,
}