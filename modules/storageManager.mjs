import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

class DBManager {

  #credentials = {};

  constructor() {

    const connectionString = process.env.DB_CONNECTIONSTRING_PROD;
    const ssl = process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false;

    if (!connectionString) {
      throw new Error("You forgot the db connection string");
    }

    this.#credentials = {
      connectionString,
      ssl
    };

    try {
      const client = new pg.Client(this.#credentials);
      client.connect();
      console.log("Connected to database successfully.");
      client.end();
    } catch (error) {
      console.error("Error connecting to database:", error);
      throw new Error("Failed to connect to database.");
    }
  }

  async checkIfLoggedIn(email,password) {
    let client = new pg.Client(this.#credentials);
    const sql = 'SELECT * FROM "Users" WHERE email = $1 AND password = $2';
    const params = [email, password];
    await client.connect();
    console.log("client", client);

    const rows = (await client.query(sql, params)).rows;
    console.log("rows", rows);
    if (rows && rows.length == 1) {
        console.log("Logged in");
      return rows[0];
    } else {
      console.log("Not logged in");
      return null;
    }
  }

async createUser(user) {
    const { email, name, password } = user;
    const sql = 'INSERT INTO "Users" (email, name, password) VALUES ($1, $2, $3) RETURNING id';
    const params = [email, name, password];
    let client = new pg.Client(this.#credentials);
    await client.connect();
    const result = await client.query(sql, params);
    await client.end();
    return result.rows[0].id;
}




}
export default new DBManager();


