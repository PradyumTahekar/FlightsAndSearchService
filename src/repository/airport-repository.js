const {Airport} = require('../models/index')

class AirportRepository{

    async createAirport(airport_data)
    {
        try {

            const airport = await Airport.create(airport_data);
            return airport;
            
        } catch (error) {
            console.log("something went wrong inside repository layer");
            throw {error};
        }
    }

    async getAirport(airportId) {
        try {
          const airport = await Airport.findByPk(airportId);
          return airport;
        } catch (error) {
          console.log("something went wrong inside repository layer");
          throw error; // Throw the error without wrapping it in an object
        }
      }

    async updateAirport(airportId,data)
    {
        try {

            const airport = await Airport.update(data, {
                where: {
                    id: airportId
                }
            });
            return airport;
            
        } catch (error) {
            console.log("something went wrong inside repository layer");
            throw {error};
        }
    }

    async deleteAirport(airportId)
    {
        try {

             await Airport.destroy({
                where: {
                    id: airportId
                }
             });
            return true;
            
        } catch (error) {
            console.log("something went wrong inside repository layer");
            throw {error};
        }
    }
    
}

module.exports = AirportRepository;