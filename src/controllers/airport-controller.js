const { AirportService } = require('../services/index');
const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(200).json({
            data: airport,
            message: "airport successfully created",
            success: true,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "not able to create airport",
            success: false,
            error: { error }
        });
    }
}

const get = async (req, res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            message: "airport successfully fetched",
            success: true,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "not able to fetch airport",
            success: false,
            error: { error }
        });
    }
}

const update = async (req, res) => {
    try {

        const airport = await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: airport,
            message: "airport successfully updated",
            success: true,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "not able to update airport",
            success: false,
            error: { error }
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            message: "airport successfully delete",
            success: true,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "not able to delete airport",
            success: false,
            error: { error }
        });
    }
}

module.exports = {
    create,
    get,
    update,
    destroy
};