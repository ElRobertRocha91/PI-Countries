const { createActivityByCountry } = require("../controllers/createActivityController");

const createActivity = (req, res) => {
    try {
        const { name, difficulty, duration, season, country } =req.body;

        // Validation
        if(!name){
            throw new Error("Error: El nombre de la actividad turistica esta inexistente, por favor ingreselo, es de caracte obligatorio");
        }

        const activity = await createActivityByCountry(name, difficulty, duration, season, country);
        res.status(200).json(activity, "Actividad creada con exito");
    } catch (error) {
        console.log(error.menssage);
        res.status(404).json(error.menssage);
    }
}

module.exports = { createActivity };