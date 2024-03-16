import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

// const password = process.env.DB_secretPassword;

// Construct connection string
const connectionString = "postgres://recipe_postgresql_database_user:4EQIPuFDjlNkMKE5x5jrmixxScUWm1rJ@dpg-cn5344fqd2ns73eoj1cg-a.frankfurt-postgres.render.com/recipe_db"

// Create a new pool with the connection string
const db = new pg.Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;



// const { Pool } = pg;

// const db = new Pool({
//   host: "dpg-cn5344fqd2ns73eoj1cg-a.frankfurt-postgres.render.com",
//   user: "recipe_postgresql_database_user",
//   database: "recipe_postgresql_database",
//   password: "4EQIPuFDjlNkMKE5x5jrmixxScUWm1rJ" ,
//   port: 5432, // Default PostgreSQL port
//   ssl: {
//     rejectUnauthorized: false, // This is for disabling SSL certificate validation, adjust based on your security requirements
//   },
// });

// export default db;
