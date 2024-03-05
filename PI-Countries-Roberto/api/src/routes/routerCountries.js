const { Router } = require("express");

const { getCountries } = require("../handlers/countriesHandler");
const { getDetailCountryById } = require("../handlers/countryIdHandler");

const routerCountries = Router();

routerCountries.get('/', getCountries);
routerCountries.get('/:id', getDetailCountryById);

module.exports = routerCountries;