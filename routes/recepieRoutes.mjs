import express, { response } from "express";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import Recepie from "../modules/recepieModule.mjs";




const recepie_API = express.Router();
recepie_API.use(express.json()); // This makes it so that express parses all incoming payloads as JSON for this route.

recepie_API.get("/", Recepie.showAll );
recepie_API.get("/testRoute", Recepie.testRoute );



export default recepie_API;
