const { Flights } = require('../models/index');
const { Op } = require('sequelize');


class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.maxPrice && data.minPrice) {
            Object.assign(filter, {

                [Op.and]: [
                    {price: {[Op.lte]: data.maxPrice}},
                    {price: {[Op.gte]: data.minPrice}}
                ]
            });
        }
        if (data.minPrice) {
            Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
        }
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong inside flight repository layer");
            throw error;
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong inside flight repository layer");
            throw error;
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObj = this.#createFilter(filter)
            const flights = await Flights.findAll({
                where: filterObj
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong inside flight repository layer");
            throw error;
        }
    }

    async updateFlight(flightId, data) {
        try {
            const flight = await Flights.update(data, {
                where: {
                    id: flightId
                }
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong inside flight repository layer");
            throw error;
        }
    }


    async deleteFlight(flightId) {
        try {
            await Flights.destroy({
                where: {
                    id: flightId
                }
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong inside flight repository layer");
            throw error;
        }
    }
}

module.exports = FlightRepository;