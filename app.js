const express = require("express");

//import all the .env variables
require("dotenv").config();

//import connectdb function to connect to database
const connectdb = require("./config/db");

//import the receipe routes
const receipeRoutes = require("./routes/receipeRoutes");

const app = express();

app.use(express.json());

//connect to database
connectdb();

//use the receipe routes
app.use("/", receipeRoutes);

//start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})