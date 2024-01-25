import express from "express";
import User from "../modules/user.mjs";
import HttpCodes from "../modules/httpErrorCodes.mjs";

const USER_API = express.Router();

const users = [];

USER_API.get("/:id", (req, res) => {
  // Return user object
});

USER_API.post("/", (req, res) => {
  // create user

  const [name, email, password] =  [req.body.name, req.body.email, req.body.password]

  if (name != "" && email != "" && password) {
    const user = new User();
    user.name = name;
    user.email = email;
    //Todo - Do not save password
    user.pswHash = password;

//Does the user exsist?

let exists = false; //Må endres
if("exists"){
    users.push(user);
}



res.status(HttpCodes.succesfull.Ok);

  } else {
    res.status(HttpCodes.ClientSideErrorResponse.BadRequest).send("Missing parameters").end();
  }
});

USER_API.put("/:id", (req, res) => {
  // edit user
});

USER_API.delete("/:id", (req, res) => {
  // create user
});

export default USER_API
