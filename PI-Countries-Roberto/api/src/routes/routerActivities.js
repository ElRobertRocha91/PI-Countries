const { Router } = require("express");

const { createActivity } = require("../handlers/createActivityHandler");
const routerCountries = require("./routerCountries");

const routerActivities = Router();

routerActivities.post('/', createActivity);

module.exports = routerCountries;