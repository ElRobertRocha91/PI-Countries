const { Activities } = require("../db");

const createActivityByCountry = (name, difficulty, duration, season, country) => {

    const activityCreated = await Activities.create({
        name,
        difficulty,
        duration,
        season
    });

    // Relations activities with countries
    activityCreated.addCountry(country);

    if(activityCreated){
        console.log("Creación de actividad exitosa");
    }
}

module.exports = { createActivityByCountry };