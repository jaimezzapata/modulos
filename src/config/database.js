import mysql2 from 'mysql2'; // Fuerza a Vercel a empaquetar el driver
import { Sequelize } from "sequelize";
import { DB_NAME, DB_PASSWORD, DB_USER, OBJ_SEQUELIZE } from "./credentials.js";

export const conn = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, OBJ_SEQUELIZE)