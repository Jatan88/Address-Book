const app = require("./app");
const mongoose = require('mongoose'); 
const connectWithDb = require("./config/db");
require("dotenv").config();



// connect with database
connectWithDb();

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
})