const { Country } = require("../db");

const getCountryById = async (id) => {
    
    const countryById = await Country.findByPk(id);
    // Validation
    if(countryById === null){
        console.log("Not Found!");
    }else{
        console.log(countryById);
        const dataCountry = {
            id: countryById.id,
            name: countryById.name,
            image: countryById.flag,
            continent: countryById.continent,
            capital: countryById.capital,
            subregion: countryById.subregion,
            area: countryById.area,
            population: countryById.population
        }
        // console.log("===== Data for the Frontend: =====", dataCountry);
        return dataCountry;
    }

}

module.exports = { getCountryById };