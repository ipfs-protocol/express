import path from 'path';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config({ path: path.join(__dirname, ".env") });

const dbDialect = 'mysql';
const dbHost = process.env.DB_HOST;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: dbDialect
});

export default sequelizeConnection;