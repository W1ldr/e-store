const express = require("express");

const app = express();

//for local variables in .env
//if you don't have my .env uncomment the next line
//const api = '/api/v1'
require("dotenv/config");

const api = process.env.API_URL;

console.log(api);
