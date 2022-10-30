const dotenv = require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = ("mongoose")
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const methodOverride = require("method-override");
const connectDB = require("./config/database");
const PORT = process.env.PORT;
const MongoStore = require("connect-mongo")
const mainRoutes = require("./routes/main")


// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();


//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Use forms for put / delete
app.use(methodOverride("_method"));

//Setup Sessions - stored in MongoDB
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI, collection: 'sessions' }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  