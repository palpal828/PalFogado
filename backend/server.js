const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const mysql = require('mysql2');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(3001, () => {
    console.log(`Server is running on port ${3001}`);
});

