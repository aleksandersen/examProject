import express, { response } from "express";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/Middlewares/SuperLogger.mjs";
import DBManager from "../modules/storageManager.mjs"

const USER_API = express.Router();
USER_API.use(express.json()); // This makes it so that express parses all incoming payloads as JSON for this route.

const users = [];




USER_API.get('/:id', (req, res, next) => {

    // Tip: All the information you need to get the id part of the request can be found in the documentation 
    // https://expressjs.com/en/guide/routing.html (Route parameters)

    /// TODO: 
    // Return user object
});


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

USER_API.post('/', async (req, res, next) => {

    // This is using javascript object destructuring.
    // Recomend reading up https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#syntax
    // https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/
    const { name, email, password } = req.body;


    if (name != "" && email != "" && password != "") {
        let user = new User();
        user.name = name;
        user.email = email;

        ///TODO: Do not save passwords.
        user.password = password;

        ///TODO: Does the user exist?
        let exists = false;

        if (!exists) {
            //TODO: What happens if this fails?
            user = await user.save();
            res.status(HTTPCodes.SuccesfullRespons.Ok).json(JSON.stringify(user)).end();
        } else {
            res.status(HTTPCodes.ClientSideErrorRespons.BadRequest).end();
        }

    } else {
        res.status(HTTPCodes.ClientSideErrorRespons.BadRequest).send("Mangler data felt").end();
    }

});

USER_API.post('/:id', (req, res, next) => {
    /// TODO: Edit user
    const user = new User(); //TODO: The user info comes as part of the request 
    user.save();
});

USER_API.delete('/:id', (req, res) => {
    /// TODO: Delete user.
    const user = new User(); //TODO: Actual user
    user.delete();
});


export default USER_API