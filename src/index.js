const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

// const CityRepository = require('./repository/city-repository');
// const AirportRepository = require('./repository/airport-repository');
// const aircon = require('./controllers/airport-controller');
// const AirportService = require('./services/airport-service');
// const { City, Airport } = require('./models/index');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        if (process.env.SYNC_DB) {

            db.sequelize.sync({ alter: true });
        }

        // const airport = new AirportService();
        // airport.updateAirport(18,{address:"west of indor"});
        // console.log("hi");
    });






}

setupAndStartServer();
