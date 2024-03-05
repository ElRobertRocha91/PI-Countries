const { getCountryById } = require("../controllers/countryIdController");

const getDetailCountryById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const country = await getCountryById(id);
        // Validate
        if(!country){
            throw new Error(`No existe el país con el id: ${id}`);
        }else{
            res.status(200).json(country);
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
    


}

module.exports = { getDetailCountryById };