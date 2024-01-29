import express from "express";
import User from "../modules/user.mjs";
import HttpCodes from "../modules/httpConstants.mjs";

const USER_API = express.Router();

const users = [];

const helloWorldMiddleWare = function(req, res, next){
  console.log("Hello WOrld");                                       //Her går den videre og vi kan ha nye brackets og kjøre ny kode.
  next();
}

//user.USER_API.use(hello); Nå vil alle skrive hello.

USER_API.get("/:id", (req, res, next) => {
  // Return user object
});

USER_API.post("/", (req, res, next) => {
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
