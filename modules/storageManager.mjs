import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

class DBManager {

  #credentials = {};

  constructor() {
    const connectionString = process.env.DB_CONNECTIONSTRING_PROD;
    this.#credentials = {
      connectionString,
      ssl: process.env.DB_SSL === "true" ? process.env.DB_SSL : false,
    };
    if (connectionString == undefined) {
        throw new Error("You forgot the db connection string");
      }
  }

  async checkIfLoggedIn(email,password) {
    let client = new pg.Client(this.#credentials);
    const sql = 'SELECT * FROM "Users" WHERE "email" = $1 AND "password" = $2';
    const params = [email, password];
    await client.connect();
    console.log("client", client);

    const rows = (await client.query(sql, params)).rows;
    console.log("rows", rows);
    if (rows && rows.length == 1) {
        console.log("Logga inn????");
      return rows[0];
    } else {
      console.log("Ikke logga inn");
      return null;
    }
  }
}



export default new DBManager();
