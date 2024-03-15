import 'dotenv/config'
import express from "express"; // Express is installed using npm
import pg from "pg"
import USER_API from "./routes/usersRoute.mjs"; // This is where we have defined the API for working with users.
import SuperLogger from "./modules/Middlewares/SuperLogger.mjs";
import { User } from "./modules/user.mjs";
import recepie_API from "./routes/recepieRoutes.mjs";
import printDeveloperStartupInportantInformationMSG from "./modules/Middlewares/developerHelpers.mjs";
import DBManager from './modules/storageManager.mjs';


printDeveloperStartupInportantInformationMSG();

// Creating an instance of the server
const server = express();
// Selecting a port for the server to use.
const port = process.env.PORT || 8080;
server.set("port", port);


DBManager.checkIfLoggedIn("test", "test");

// Enable logging for server
const logger = new SuperLogger();0
server.use(logger.createAutoHTTPRequestLogger()); // Will logg all http method requests


// Defining a folder that will contain static files.
server.use(express.static("public"));

// Telling the server to use the USER_API (all urls that uses this code will have to have the /user after the base address)
server.use("/user", USER_API);

//Telling the server to use recepie_API
server.use("/recepie", recepie_API);


// Start the server
server.listen(server.get("port"), function () {
  console.log("server running", server.get("port"));
});


