const axios = require("axios");

const getApiInfo = async () => {

    const apiUrl = await axios.get('https://restcountries.com/v3/all');

    const apiInfo = await apiUrl.data.map( element => {
        return {
            id: element.cca3,
            name: element.name.common,
            flag: element.flags[0],
            continent: element.continents[0],
            capital: element.capital !=null? element.capital[0]: "No tiene Capital",
            subregion: element.subregion,
            area: element.area,
            population: element.population
        }
    });
    console.log("Esto me devuelve la API: ",apiInfo);
    // apiInfo ==> array of object: [{},{},{},...];
    return apiInfo;

}

module.exports = { getApiInfo };