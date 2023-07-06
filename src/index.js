const express = require('express');
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () => {

    const app = express() // create the express object
    

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
       
    })

}
setupAndStartServer();
