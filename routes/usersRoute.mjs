import express, { response } from "express";
import db from "../modules/databasePool.mjs";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/Middlewares/SuperLogger.mjs";

const USER_API = express.Router();
USER_API.use(express.json()); // This makes it so that express parses all incoming payloads as JSON for this route.

const users = [];

USER_API.get("/:id", async (req, res, next) => {
  const user = await db.query("SELECT * FROM users WHERE userid = $1", [
    req.body.id,
  ]);
});

// USER_API.post("/loginUser", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Sjekk om brukeren eksisterer i databasen
//     const user = await db.query("SELECT * FROM users WHERE email = $1", [
//       email,
//     ]);

//     if (user.rows.length === 0) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

USER_API.post('/login', async  (req, res, next) => {
    //TODO: Login user

    const {userEMail, userPassword} = req.body;
    console.log(`userEMail = ${userEMail}`, `userPassword = ${userPassword}`);

    const userInfo = await checkIfLoggedIn(userEMail, userPassword);

    if(userInfo){
      res.status(200).send({message: "User Ok", code: 200, data: userInfo});
    }else{
      res.status(401).send({message: "Wrong user name or password!", data: null});
    }

});









USER_API.post("/create/user", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, EMail, and password are required" });
    }
  
    try {
      const result = await db.query(
        "INSERT INTO tblUser(Name, EMail, Password) VALUES($1, $2, $3) RETURNING UserID",
        [name, email, password]
      );
      res.status(201).json({ UserID: result.rows[0].userid, message: "User created successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });


USER_API.delete("/:id", (req, res) => {
  /// TODO: Delete user.
  const user = new User(); //TODO: Actual user
  user.delete();
});

export default USER_API;
