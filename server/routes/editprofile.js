const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require('bcryptjs');
const {sign} = require('jsonwebtoken')
const { validateToken } = require('../middleware/auth')

router.get("/auth", validateToken, async (req, res) => {
  // res.json({
  //    loggedInStatus: true,
  //    username: req.user.username,
  //    role: req.user.role, 
  //    userID: req.user.id
  // }); 
});


router.put("/", validateToken, async (req, res) => {
  
    let { newUsername, oldPassword, newPassword } = req.body;
    let user = await users.findOne({ where: { username: req.user.username } });

    if(newUsername !== "") {
      user.update(
          { username: newUsername },
          { where: { username: req.user.username } }
        );
        const accessToken = sign({ username : newUsername, id : user.id, role: user.role},"Gh5HQXhGBWs24fpAIRmAbn0TELM4");
        res.json({
          username: user.username, 
          role: user.role, 
          userID: user.id, 
          loggedInStatus: true, 
          token: accessToken
        });
      }
    //   console.log("hey")
    bcrypt.compare(oldPassword, user.password).then(async (match) => {
      if(!match)  {
        res.json({ error: "Wrong Password Entered!" });
      }else{
        bcrypt.hash(newPassword, 10).then((hash) => {
          user.update(
            { password: hash },
            { where: { username: req.user.username } }
          );
          res.json({
            username: user.username, 
            role: user.role, 
            userID: user.id, 
            loggedInStatus: true, 
            token: validateToken.accessToken
          });
        });
      }
    });

  });
  
  module.exports = router;