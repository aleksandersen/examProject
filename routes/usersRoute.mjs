import express, { response } from "express";
import db from "../modules/databasePool.mjs";
import User from "../modules/user.mjs";
import { HTTPCodes } from "../modules/httpConstants.mjs";
import SuperLogger from "../modules/Middlewares/SuperLogger.mjs";

const USER_API = express.Router();
USER_API.use(express.json()); // This makes it so that express parses all incoming payloads as JSON for this route.

const users = [];




USER_API.get('/:id', async (req, res, next) => {

    const user = await db.query("SELECT * FROM users WHERE userid = $1", [req.body.id]);
});


USER_API.post("/loginUser", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Sjekk om brukeren eksisterer i databasen
        const user = await db.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);

        if (user.rows.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        };


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});




USER_API.post('/createUser', async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO Users(email, name, password) VALUES($1, $2, $3) RETURNING *',
            [email, name, password]
        );
        if (result && result.rows) {
            const responseForm = { msg: "User was created", code: 200, data: { userID: result.rows[0].userid } }
            res.json(responseForm);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



USER_API.delete('/:id', (req, res) => {
    /// TODO: Delete user.
    const user = new User(); //TODO: Actual user
    user.delete();
});


export default USER_API