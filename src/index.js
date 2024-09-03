const express = require("express");
const { PORT } = require("./config/server-config");
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models/index");
function setupAndStartServer() {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors());

    app.use("/api", apiRoutes);
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });

    // db.sequelize.sync(true);
}

setupAndStartServer();
