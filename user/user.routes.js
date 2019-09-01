const user = require('./user.controller');

const Router = require('express').Router();


Router.post("/new", user.create);

module.exports = Router;