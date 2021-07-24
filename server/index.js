const express = require('express')
const app = express()
const cors = require('cors')
const session = require("express-session");

app.use(express.json())
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
      key: "userId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
  );

//Routers
const registerRouter = require('./routes/register')
app.use("/register",registerRouter)
const loginRouter = require('./routes/login')
app.use("/login",loginRouter)

const db = require('./models')

db.sequelize.sync().then(()=>{
  app.listen(3001,()=>{
    console.log("Server running on port 3001")
    })  
})

module.exports = db