var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
const config = 'mongodb://localhost:27017/DashboardProject';
//let cors = require(cors);

mongoose.Promise = global.Promise;
mongoose.connect(config, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => 
{
    console.log('Database connected successfully !')
},
)

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var sensorRouteur = require("./routes/sensors");
var measureRouteur = require("./routes/measures");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/measure", measureRouteur);
app.use("/sensor", sensorRouteur);

module.exports = app;