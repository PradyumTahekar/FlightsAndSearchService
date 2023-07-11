const express = require('express');

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');


const router = express.Router();

// City API CRUD
router.post('/city', CityController.create); // working
router.get('/city/:id', CityController.get);  // working
router.patch('/city/:id', CityController.update); // working
router.delete('/city/:id', CityController.destroy); // working
router.get('/city', CityController.getAll); //working

// Airport API CRUD
router.post('/airport' ,AirportController.create); // working
router.get('/airport/:id', AirportController.get); // working
router.patch('/airport/:id', AirportController.update); //working
router.delete('/airport/:id', AirportController.destroy); // working 

// Flight API
router.post('/flights', FlightController.create); // working 
router.get('/flights', FlightController.getAll); // working for both all flights and filtered flights


module.exports = router;

