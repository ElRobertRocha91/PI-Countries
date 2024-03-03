const axios = require("axios");
const { Country } = require("../db");

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
    console.log("Solicitud de la API exitosa");
    // apiInfo ==> array of object: [{},{},{},...];
    return apiInfo;

}

// Save information of API in DATABASE
const saveInfo = async () => {

    const arrCountries = await getApiInfo();
    // I create database and load it wich the information
    await Country.bulkCreate(arrCountries);
    const data = await Country.findAll();
    // Validatión
    if(data.length){
        console.log("Carga de base de datos exitosa");
        return data;
    }
}


// Get information into DATABASE
const getInfoData = async () => {
    const countries = await Country.findAll();
    
    // If database does not exist, create it.
    // But if the database already exist, I just fetch the data.
    if(!countries.length){
        const infoData = await saveInfo();
        const data = infoData.map(el => {
            return {
                id: el.id,
                image: el.flag,
                name: el.name,
                continent: el.continent
            }
        });
        console.log("Base de datos vacia, recien cargada");
        return data;
    }else{   
        const arrData = countries.map(el => {
            return {
                id: el.id,
                image: el.flag,
                name: el.name,
                continent: el.continent
            }
        });
        console.log("Base de datos envio la info, ya esta cargada");
        return arrData;
    }
}

module.exports = { getApiInfo, saveInfo, getInfoData };