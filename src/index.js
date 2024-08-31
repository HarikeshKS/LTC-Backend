const express = require("express");
const { PORT } = require("./config/server-config");
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

function setupAndStartServer() {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();
