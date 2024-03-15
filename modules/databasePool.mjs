import pg from "pg";
const { Pool } = pg;

const db = new Pool({
  user: "recipe_postgresql_database_user",
  host: "dpg-cn5344fqd2ns73eoj1cg-a.frankfurt-postgres.render.com",
  database: "recipe_db",
  password: "4EQIPuFDjlNkMKE5x5jrmixxScUWm1rJ",
  port: 5432, // Default PostgreSQL port
  ssl: {
    rejectUnauthorized: false // This is for disabling SSL certificate validation, adjust based on your security requirements
  }
});

export default db;
