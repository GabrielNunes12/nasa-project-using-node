const express = require('express');
const app = express();
const { planetRouter } = require('./controllers/planets.controller');
app.use(express.json());
app.use(planetRouter);
module.exports = app;