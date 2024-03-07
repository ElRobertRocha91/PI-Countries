const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {

    const dataCountry = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: '%'+ name
            }
        }
    });
    // console.log(dataCountry);
    return dataCountry;
}

module.exports = { getCountryByName };