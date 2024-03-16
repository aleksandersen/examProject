import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

class DBManager {
    #credentials = {};

    constructor(connectionString) {
        console.log("TESTING");
        this.#credentials = {
            connectionString,
            ssl: (process.env.DB_SSL === "true") ? process.env.DB_SSL : false
        };
    }
    
    async checkIfLoggedIn(EMail, Password) {
        let client = new pg.Client(this.#credentials);
        const sql = 'SELECT * FROM "Users" WHERE "email" = $1 AND "password" = $2';
        const params = [EMail, Password];
        await client.connect();
        const rows = (await client.query(sql, params)).rows;
        if (rows && rows.length == 1) {
            return rows[0];
        } else {
            console.log("Ikke logga inn");
            return null;
        }
    }
}

let connectionString = process.env.DB_CONNECTIONSTRING_LOCAL;
if (process.env.ENVIORMENT != "local") {
    connectionString = process.env.DB_CONNECTIONSTRING_PROD;
}

// Vi bruker en miljøvariabel for å hente databasetilgangskodene
if (connectionString == undefined) {
    throw new Error ("You forgot the db connection string");
}

export default new DBManager(connectionString);
