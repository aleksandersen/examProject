import express, { response } from "express";
import Recepie from "../modules/recepieModule.mjs";




const recepie_API = express.Router();
recepie_API.use(express.json()); 

recepie_API.get("/", Recepie.showAll );
recepie_API.get("/testRoute", Recepie.testRoute );



export default recepie_API;
