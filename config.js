const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}

const API = "https://api-aswin-sparky.koyeb.app";
const ALIVE = process.env.ALIVE || "Mark is always On";
const HANDLERS = process.env.HANDLER || "/";
const SESSION_ID = process.env.SESSION_ID || "";
const SUDO = process.env.SUDO || '254736429306';
const AUTO_STATUS_VIEW = process.env.AUTO_STATUS_VIEW || "true";
const ALWAYS_ONLINE = process.env.ALWAYS_ONLINE || "true";
const DISABLE_PM = process.env.DISABLE_PM  || "true";
const PM_BLOCK = process.env.PM_BLOCK || "true";
const PMB = process.env.PMB || "Sorry, I can't help you in private chat.";
const READ_MESSAGES = process.env.READ_MESSAGES || "true";
const BOT_INFO = process.env.BOT_INFO || "Nzi-BOT-MD;ASWIN SPARKY;https://github.com/Sachoni/X-BOT-MD/blob/d66f487d9e4c3208bd1472b149959c0cb6793125/Images/Screenshot_20240919_190110_CapCut.jpg";
const URL = process.env.URL || "https://www.instagram.com/sparky.drip";
const AUDIO_DATA = process.env.AUDIO_DATA || "Nzi-BOT MD;ASWIN SPARKY;https://github.com/Sachoni/X-BOT-MD/blob/d66f487d9e4c3208bd1472b149959c0cb6793125/Images/Screenshot_20240919_190110_CapCut.jpg";
const STICKER_DATA = process.env.STICKER_DATA || "X BOT MD;ASWIN SPARKY";
const WORK_TYPE = process.env.WORK_TYPE || 'public';
const DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
const HEROKU_APP_NAME = process.env.HEROKU_APP_NAME || "";
const HEROKU_API_KEY = process.env.HEROKU_API_KEY || "";
const KOYEB_API_KEY = process.env.KOYEB_API_KEY || "";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyB2vbK4v4aZPPvLdtjsABpnzCt3wbAhgWM";











module.exports = {
  API,
  ALIVE,
  HANDLERS,
  SUDO,
  WORK_TYPE,
  SESSION_ID,
  STICKER_DATA,
  BOT_INFO,
  AUDIO_DATA,
  AUTO_STATUS_VIEW,
  ALWAYS_ONLINE,
  PM_BLOCK,
  PMB,
  READ_MESSAGES,
  DISABLE_PM,
  URL,
  VERSION:"3.2.0",
  HEROKU_API_KEY,
  HEROKU_APP_NAME,
  KOYEB_API_KEY,
  GEMINI_API_KEY,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
