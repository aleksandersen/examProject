import express, { response } from "express";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";

//This is the middleware for recepies

class Recepie{

static showAll(req, res){

    res.status(HTTPCodes.SuccesfullRespons.Ok).send(JSON.stringify({ msg: "Here are the recepies" })).end();

}
    constructor(){

//Todo: Add elements in recepies.

    }       
}

export default Recepie;