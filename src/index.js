const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
// const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({name:"Indore"});
        // repo.deleteCity(50);
        
    });
}

setupAndStartServer();
