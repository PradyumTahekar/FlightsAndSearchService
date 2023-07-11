const { CityService } = require('../services/index');
const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City successfully created",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to creat city",
            err: error
        });
    }
}

//DELETE -> /city/:id

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City successfully deleted",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete city",
            err: error
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City successfully Fetched",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get city",
            err: error
        });
    }
}

//patch -> /city/:id ->req.body updata has two parameter
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        
        return res.status(200).json({
            data: city,
            success: true,
            message: "City successfully created",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to creat city",
            err: error
        });
    }
}

// This will return all the city which are present inside the  CITIES table

const getAll = async (req, res) => {
    try {

        const cities = await cityService.getAllCities(req.query);
        console.log(cities);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "succefully fetched all the cities",
            error: {}
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all city",
            err: error
        });

    }
}



module.exports = {
    create,
    get,
    update,
    destroy,

    getAll

};