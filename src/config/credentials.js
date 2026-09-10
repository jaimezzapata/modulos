const DB_NAME = process.env.DB_NAME || "campus_tid"
const DB_USER = process.env.DB_USER || "root"
const DB_PASSWORD = process.env.DB_PASSWORD || ""
const OBJ_SEQUELIZE = {
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    host: process.env.DB_HOST || "localhost"
}
export {
    DB_NAME, DB_PASSWORD, DB_USER, OBJ_SEQUELIZE
}

