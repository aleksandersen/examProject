import express, { response } from "express";
import DBManager from "../modules/storageManager.mjs"
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/Middlewares/SuperLogger.mjs";

const USER_API = express.Router();
USER_API.use(express.json()); // 


USER_API.get("/:id", async (req, res, next) => {
  const user = await DBManager.query("SELECT * FROM users WHERE userid = $1", [
    req.body.id,
  ]);
});
USER_API.get("/test", async (req, res, next) => {
  const user = await DBManager.query('SELECT * FROM Users', [
    req.body.id,
  ]);
});



USER_API.post('/login', async  (req, res, next) => {

    const {userEMail, userPassword} = req.body;

    console.log(`userEMail = ${userEMail}`, `userPassword = ${userPassword}` ,"Is this the testuser?");

    const userInfo = await DBManager.checkIfLoggedIn(userEMail, userPassword);

    if(userInfo){
      res.status(200).send({message: "User Ok", code: 200, data: userInfo});
    }else{
      res.status(401).send({message: "Wrong user name or password!", data: null});
    }

});



USER_API.post("/create", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, EMail, and password are required" });
    }
  
    try {
      const userID = await DBManager.createUser({ name, email, password });
      res.status(201).json({ UserID: userID, message: "User created successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });


USER_API.delete("/:id", (req, res) => {
  const user = new User(); 
  user.delete();
});

export default USER_API;
