const { getInfoData } = require("../controllers/countriesController");
const { getCountryByName } = require("../controllers/countryByNameController");

const getCountries = async (req, res) => {
    try {
        const { name } = req.query;

        if(!name){
            const allCountries = await getInfoData();
            res.status(200).json(allCountries);
        }else{
            const countryByName = await getCountryByName(name);
            // console.log("=====Búsqueda Exitosa por name======");
            // Validation
            if(!countryByName){
                throw new Error(`No existe el país con el nombre: ${name}, por favor ingrese otro nombre!`);
            }else{
                res.status(200).json(countryByName);
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(404).json(error.message);
    }
}

module.exports = { getCountries };