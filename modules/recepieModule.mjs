import express, { response } from "express";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";

//This is the middleware for recepies

class Recepie{

static showAll(req, res){

    res.status(HTTPCodes.SuccesfullRespons.Ok).send(JSON.stringify({ msg: "Here are the recepies" })).end();

}

static testRoute(req, res){

    res.status(HTTPCodes.SuccesfullRespons.Ok).send(JSON.stringify({ msg: "Here is a new route" })).end();

}

    constructor(){

//Todo: Add different elements in recepies.

    }       
}

export default Recepie;
