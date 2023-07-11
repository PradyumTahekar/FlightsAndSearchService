const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {

        const flight = await flightService.createFlight(req.body);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "Flight Successfully created flight",
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to creat flight",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched the filtered flights",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all flights",
            err: error
        });
    }
}

module.exports = {
    create,
    getAll
};


