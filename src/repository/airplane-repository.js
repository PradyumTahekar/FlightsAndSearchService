const {Airplane} = require('../models/index');

class AirplaneRepository{

    async CreateAirplane(data)
    {
        try {
            const airplane = await Airplane.create(data);
        } catch (error) {
            console.log("something went wrong inside the airplane repository layer");
            throw error;
        }
    }

    async getAirplane(airplaneId)
    {
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.log("something went wrong inside the airplane repository layer");
            throw error;
        }
    }
}

module.exports = AirplaneRepository;