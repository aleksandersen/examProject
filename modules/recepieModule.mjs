import express, { response } from "express";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";


class Recepie {
  static showAll(req, res) {
    res
      .status(HTTPCodes.SuccesfullRespons.Ok)
      .send(JSON.stringify({ msg: "Here are the recepies" }))
      .end();
  }

  static testRoute(req, res) {
    res
      .status(HTTPCodes.SuccesfullRespons.Ok)
      .send(JSON.stringify({ msg: "Here is a new route" }))
      .end();
  }

  constructor() {
 }
}

export default Recepie;
