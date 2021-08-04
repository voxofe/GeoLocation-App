const express = require('express');
const app = express();
const cors = require('cors');
const session = require("express-session");

app.use(express.json());
app.use(cors());

//Routers
const registerRouter = require('./routes/register');
app.use("/register",registerRouter);
const loginRouter = require('./routes/login');
app.use("/login",loginRouter);
const uploadRouter = require('./routes/upload');
app.use("/upload",uploadRouter);
const editProfileRouter = require('./routes/editprofile')
app.use("editprofile",editProfileRouter)

const db = require('./models');

db.sequelize.sync().then(()=>{
  app.listen(3001,()=>{
    console.log("Server running on port 3001");
    })  
})

module.exports = db;