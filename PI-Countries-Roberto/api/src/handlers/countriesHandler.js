const { getApiInfo, saveInfo, getInfoData } = require("../controllers/countriesController");

const getCountries = async (req, res) => {
    try {
        const allCountries = await getInfoData();
        res.status(200).json(allCountries);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getCountries };