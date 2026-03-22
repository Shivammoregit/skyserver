import mysql from "mysql2/promise";

let pool;

function getConfig() {
  return {
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_NAME ?? "",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  };
}

export function hasDatabaseConfig() {
  const config = getConfig();
  return Boolean(config.host && config.user && config.database);
}

export function getPool() {
  if (!pool) {
    pool = mysql.createPool(getConfig());
  }

  return pool;
}
