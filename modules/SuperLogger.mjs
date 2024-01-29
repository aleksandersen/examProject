/*
We need a logging tool that can automate most logging needs. It should be globally avaliable, but also support multiple instances.
*/
import chalk from "chalk";
import {HttpCodes, HTTPMethods} from "./httpConstants.mjs";

let currentThresholdValue = LOGGING_LEVELS.notImportant;

let colors = {};
colors[HTTPMethods.POST] = chalk.yellow;
colors[HTTPMethods.GET] = chalk.green;

const colorize = (method) => {
    return colors[method](method);
}

class superLogger{

static currentThresholdValue

function log(req, res, next){

const LOGGING_LEVELS = {
    notImportant: 0,

}


let shouldLog = false;


let type = req.method;
const path = req.originalURL;
const when = new Date().toLocaleTimeString();

// if(type === HTTPMethods.POST){
//     type = chalk.yellow(type);
// }else if (type === HTTPMethods.GET)
// type = chalk.green(type)
// }

type = colorize(type);}

}

next();

export default superLogger;