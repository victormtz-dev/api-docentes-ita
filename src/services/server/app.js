import express from "express";
import config from "../../config/config"
import {expressJSON, httpForm, corsOptions} from "../../middlewares/index"

const app = express();


//Settings
app.set('port', config.port);

//Middlewares
app.use(expressJSON);
app.use(httpForm);
app.use(corsOptions);

//Routes
//app.use("/api")





/**
 * Start Server
 */
export default app;