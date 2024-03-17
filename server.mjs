import 'dotenv/config'
import express from "express"; 
import pg from "pg"
import USER_API from "./routes/usersRoute.mjs"; 
import SuperLogger from "./modules/Middlewares/SuperLogger.mjs";
import { User } from "./modules/user.mjs";
import recepie_API from "./routes/recepieRoutes.mjs";
import printDeveloperStartupInportantInformationMSG from "./modules/Middlewares/developerHelpers.mjs";


printDeveloperStartupInportantInformationMSG();

const server = express();
const port = process.env.PORT || 8080;
server.set("port", port);

const logger = new SuperLogger();0
server.use(logger.createAutoHTTPRequestLogger()); 


server.use(express.static("public"));

server.use("/user", USER_API);

server.use("/recepie", recepie_API);

server.listen(server.get("port"), function () {
  console.log("server running", server.get("port"));
});




