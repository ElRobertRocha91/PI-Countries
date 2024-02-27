const { Router } = require("express");

const { getCountries } = require("../handlers/countriesHandler");

const routerCountries = Router();

routerCountries.get('/', getCountries);

module.exports = routerCountries;