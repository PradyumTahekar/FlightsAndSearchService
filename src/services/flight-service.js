const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if((compareTime(data.departureTime,data.arrivalTime,))){
                throw {error: "Arrival time cannot be less than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("something went wrong inside the service layer");
            throw error;
        }

    }

    async getAllFlightData(data)
    {
        try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("something went wrong inside the service layer");
            throw error;
        }
    }


}

module.exports = FlightService;

// This is what we will get from the flight controller

    // flightNumber,
    // airplaneId,
    // departureAirportId,
    // arrivalAirportId,
    // arrivalTime,
    // departureTime,
    // price,
    // totalSeats of airplane we will not get this from flightcontroller,
    //  we need to fetch this from AirplaneRepository

